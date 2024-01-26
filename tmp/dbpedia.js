const axios = require('axios');

let mapABBs = new Map();
let mapABBsViews = new Map();
let mapDBCs = new Map();
let mapDPSs = new Map();

const host = "/repositories/EIRA";

let abbList = [];
let dbcList = [];
let dpsList = [];

const getABBQuery = `PREFIX eira: <http://data.europa.eu/dr8/eira/>
PREFIX archimate: <http://data.europa.eu/dr8/archimate/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT DISTINCT ?name ?puri ?description ?view ?policy ?source WHERE { 
    ?abb eira:concept eira:ArchitectureBuildingBlock;
         eira:PURI ?puri ;
         archimate:name ?name ;
         skos:definition ?description ;
         eira:eifLayer ?view .
    
    OPTIONAL { ?abb eira:businessDomain ?policy . }
    
    FILTER ( NOT EXISTS { ?abb eira:businessDomain ?policy } || ?policy IN ( eira:Taxes ) )
}`;

const getDBCQuery = `PREFIX eira: <http://data.europa.eu/dr8/eira/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
SELECT DISTINCT ?puri ?name ?description ?policy WHERE {
    ?dbc eira:implementedBy "http://data.europa.eu/dr8/DigitalBusinessCapability"@en ;
         dc:identifier ?puri ;
         dc:title ?name ;
         dc:description ?description .
    
    OPTIONAL { ?dbc eira:businessDomain ?policy . }
    
    FILTER ( NOT EXISTS { ?dbc eira:businessDomain ?policy } || ?policy IN ( eira:Taxes ) ) 
}`;

const getDPSQuery = `PREFIX eira: <http://data.europa.eu/dr8/eira/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
SELECT DISTINCT ?puri ?name ?description ?policy WHERE { 
    ?dps skos:broader ?dpsFiltering ;
         dc:identifier ?puri ;
         dc:title ?name ;
         skos:definition ?description .
    
    OPTIONAL { ?dps eira:businessDomain ?policy . }
    
    FILTER ( str(?dpsFiltering) = "http://data.europa.eu/dr8/DigitalPublicBusinessService" )
    FILTER ( NOT EXISTS { ?dps eira:businessDomain ?policy } || ?policy IN ( eira:Taxes ) ) 
}`;

const getABBToDBCRelationshipsQuery = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX archimate: <http://data.europa.eu/dr8/archimate/>
PREFIX eira: <http://data.europa.eu/dr8/eira/>
SELECT DISTINCT ?abbPuri ?dbcPuri WHERE {
    ?s archimate:hasSource ?abbPuri ;
       archimate:hasTarget ?dbcPuri .
       #eira:application eira:Upscale .
    
    ?abbPuri eira:concept eira:ArchitectureBuildingBlock .
    ?dbcPuri eira:implementedBy "http://data.europa.eu/dr8/DigitalBusinessCapability"@en .
}`;

const getABBToDPSRelationshipsQuery = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX archimate: <http://data.europa.eu/dr8/archimate/>
PREFIX eira: <http://data.europa.eu/dr8/eira/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT DISTINCT ?abbPuri ?dpsPuri WHERE {
    ?s archimate:hasTarget ?dpsPuri ;
       archimate:hasSource ?abbPuri ;
       eira:application eira:Upscale .
    
    ?abbPuri eira:concept eira:ArchitectureBuildingBlock .
    ?dpsPuri skos:broader ?dpsFiltering .
    FILTER (str(?dpsFiltering) = "http://data.europa.eu/dr8/DigitalPublicBusinessService") .
}`;

const getDBCToDPSRelationshipsQuery = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX archimate: <http://data.europa.eu/dr8/archimate/>
PREFIX eira: <http://data.europa.eu/dr8/eira/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
SELECT DISTINCT ?dbcPuri ?dpsPuri ?dpsName WHERE {
    ?s archimate:hasTarget ?dbcPuri ;
       archimate:hasSource ?dpsPuri ;
       eira:application eira:Upscale .
    
    ?dbcPuri eira:implementedBy "http://data.europa.eu/dr8/DigitalBusinessCapability"@en .
    ?dpsPuri skos:broader ?dpsFiltering ;
             dc:title ?dpsName .
    FILTER (str(?dpsFiltering) = "http://data.europa.eu/dr8/DigitalPublicBusinessService") .
}`;

const requestHeaders = {
	'Content-Type': 'application/x-www-form-urlencoded',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
};

const requestAuth = {
	username: "daniel.bowen",
	password: "daniel2023"
}

export const getABBs = async () => {
	let ABBs = [];
	try {
		await axios.post(host, {
			query: getABBQuery
		}, {
			headers: requestHeaders,
			auth: requestAuth
		}).then(async (response) => {
			response.data.results.bindings.forEach(element => {
				let jsonBody = {
					Policy: resolvePolicy(element),
					ID: element.puri.value,
					Architecture_Building_Block: element.name.value,
					Description: element.description.value,
					DBCs: [],
					Digital_Public_Service: [],
					successors: [],
					View: resolveView(element.view.value)
				}

				ABBs.push(jsonBody);
			});

			await axios.post(host, {
				query: getABBToDBCRelationshipsQuery
			}, {
				headers: requestHeaders,
				auth: requestAuth
			}).then(async (dbcRelationResponse) => {
				dbcRelationResponse.data.results.bindings.forEach(element => {
					let relatedAbb = ABBs.filter(abb => abb.ID == element.abbPuri.value)[0];
					if (relatedAbb != null) {
						relatedAbb.DBCs.push(element.dbcPuri.value);
						relatedAbb.successors.push(element.dbcPuri.value);
					}
				});

				await axios.post(host, {
					query: getABBToDPSRelationshipsQuery
				}, {
					headers:requestHeaders,
					auth: requestAuth
				}).then(async (dpsRelationResponse) => {
					dpsRelationResponse.data.results.bindings.forEach(element => {
						let relatedAbb = ABBs.filter(abb => abb.ID == element.abbPuri.value)[0];
						if (relatedAbb != null) {
							relatedAbb.Digital_Public_Service.push(element.dpsPuri.value);
							relatedAbb.successors.push(element.dpsPuri.value);
						}
					});
				});
			}, (error) => {
				console.log(error);
			});
		}, (error) => {
			console.log(error);
		});

		return ABBs;
	} catch (error) {
		console.log(error);
	}
}

export const getDBCs = async () => {
	let DBCs = [];
	try {
		await axios.post(host, {
			query: getDBCQuery
		}, {
			headers: requestHeaders,
			auth: requestAuth
		}).then(async (response) => {
			response.data.results.bindings.forEach(element => {
				let jsonBody = {
					ID: element.puri.value,
					Policy: resolvePolicy(element),
					Name: element.name.value,
					Description: element.description.value,
					Digital_Public_Services: []
				};

				DBCs.push(jsonBody);
			});

			await axios.post(host, {
				query: getDBCToDPSRelationshipsQuery
			}, {
				headers: requestHeaders,
				auth: requestAuth
			}).then(async (dpsRelationResponse) => {
				dpsRelationResponse.data.results.bindings.forEach(element => {
					let relatedDbc = DBCs.filter(dbc => dbc.ID == element.dbcPuri.value)[0];
					if (relatedDbc != null) {
						relatedDbc.Digital_Public_Services.push({Name: element.dpsName.value, ID: element.dpsPuri.value});
					}
				});
			});
		});

		return DBCs;
	} catch (error) {
		console.log(error);
	}
}

export const getDPSs = async () => {
	let DPSs = []
	try {
		await axios.post(host, {
			query: getDPSQuery
		}, {
			headers: requestHeaders,
			auth: requestAuth
		}).then(async (response) => {
			response.data.results.bindings.forEach(element => {
				let jsonBody = {
					ID: element.puri.value,
					Policy: resolvePolicy(element),
					Name: element.name.value,
					Description: element.description.value,
					Digital_Business_Capability: []
				};

				DPSs.push(jsonBody);
			});

			await axios.post(host, {
				query: getDBCToDPSRelationshipsQuery
			}, {
				headers: requestHeaders,
				auth: requestAuth
			}).then(async (dbcRelationResponse) => {
				dbcRelationResponse.data.results.bindings.forEach(element => {
					let relatedDps = DPSs.filter(dps => dps.ID == element.dpsPuri.value)[0];
					if (relatedDps != null) {
						relatedDps.Digital_Business_Capability.push(element.dbcPuri.value);
					}
				});
			});
		});

		return DPSs;
	} catch(error) {
		console.log(error);
	}
}

function resolveView(element) {
	if (element.includes("Legal")) {
		return "Legal";
	} else if (element.includes("Organisational")) {
		return "Organisational";
	} else if (element.includes("Semantic")) {
		return "Semantic";
	} else if (element.includes("Technicalapplication")) {
		return "Technical - Application";
	} else if (element.includes("Technicalinfrastructure")) {
		return "Technical - Infrastructure";
	} else {
		return "N/A";
	}
}

function resolvePolicy(element) {
	let value = element.policy != undefined ? element.policy.value : "Business Agnostic";
	if (value.includes("Taxes")) {
		return "Taxes";
	} else if (value.includes("Customs")) {
		return "Customs";
	} else if (value.includes("Health")) {
		return "Health";
	} else {
		return value;
	}
}