import "regenerator-runtime/runtime";

let demo = true;
google.charts.load("current", {
  packages: ["corechart", "controls"],
});
let chartBubble;
let data;
let dashboard;
let selectedValue;
let network = null;
let DPSnetwork = null;
let DPSNetNodes;
let network2 = null;
let network2Nodes;
let toogleInfra = true;
let busOrientation = 1;
let bcList = {};
let DPSs = {};
let viewsInfra = [];
let viewBCmc = [];
let selectedView = [];
const idBCdom = 1;
const idBCinf = 2;
const idLdom = 3;
const idOdom = 4;
const idSdom = 5;
const idTAdom = 6;
const idTIdom = 7;
const idLinf = 8;
const idOinf = 9;
const idSinf = 10;
const idTAinf = 11;
const idTIinf = 12;
let selectedBC;
let clickedBC;
let clickedDPSs = [];
let maxBudget = 0;

let fileContent = {};
let inputBCJSON;
let inputBBJSON;
let inputDPSJSON;
const hAxisLabes = {
  1: "National Digital Strategy Fit",
  5: "Expected Public Value",
};

const policyColors = {
  health: "#e74a3b",
  tax: "#4e73df",
  "business agnostic": "#1cc88a",
  infrastructure: "#1cc88a",
};
const policyColorsWithOpacity = {
  health: "#e74a3b80",
  tax: "#4e73df80",
  "business agnostic": "#1cc88a80",
  infrastructure: "#1cc88a80",
};

const policyImages = {
  health: "../img/health.png",
  tax: "../img/tax.png",
  "business agnostic": "../img/tech.png",
};

const natDigStrategicFitTooltip = `It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.`;

const expPubValueTooltip = `It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the digital business capability. (*) default is the highest possible prospective ability`;

const abToSuppDbusCapTooltip = `It measures the current ability to support the digital business capability`;

const budgetTooltip = `It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the digital business capability`;

/**
 *
 * Create an object from the array of DPS and group them by id
 */
let groupDPSsByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString();
    let policy = item.Policy.trim().toLowerCase().replace(/ /g, " ");
    let name = item.Name.toString();
    let description = (item.Description || "").trim();
    let abbs = [];
    let dBCs = [];

    if (
      item["Digital_Business_Capability"] &&
      item["Digital_Business_Capability"] !== null
    ) {
      let tempDBCS = item["Digital_Business_Capability"].toString().trim();
      dBCs = tempDBCS.split(";").filter(Boolean);
    }

    let tempObj = {
      [id]: {
        id,
        policy,
        name,
        description,
        dBCs,
        abbs,
      },
    };

    return { ...obj, ...tempObj };
  }, {});
};

/**
 *
 * Create an object from the array of ABBs and group them by id
 */
let groupABBByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString();
    let policy = item.Policy.trim().toLowerCase();
    let policyToCompare = policy.split(" ").filter(Boolean).join("-");

    let view = item.View.split(" ")
      .filter((v) => v.toLowerCase() !== "view")
      .filter(Boolean)
      .join("")
      .toLowerCase();
    let area = item.Area.trim()
      .split("-")
      .filter(Boolean)
      .map((str) => str.trim())
      .map((str) => str.toLowerCase())
      .join("-");
    let abb = item["Architecture_Building_Block"].trim();
    let description = (item.Description || "").trim();
    let ability = null;
    let successors = [];
    let digPubServ = [];

    if (item.successors !== undefined && item.successors !== null) {
      let tempSuccessors = item.successors.toString();
      successors = tempSuccessors.split(";").filter(Boolean);
    }

    if (
      item["Digital_Public_Service"] !== undefined &&
      item["Digital_Public_Service"] !== null
    ) {
      let tempDPS = item["Digital_Public_Service"].toString();
      digPubServ = tempDPS.split(";").filter(Boolean);
    }

    let abbObject = {
      id,
      policy,
      view,
      area,
      abb,
      description,
      ability,
      successors,
      digPubServ,
    };

    let tempObj = {
      [id]: abbObject,
    };

    if (policyToCompare === "business-agnostic") {
      for (let x in viewsInfra) {
        if (viewsInfra[x].name == view) {
          viewsInfra[x].bbs.push(abbObject);
          break;
        }
      }
    }

    return { ...obj, ...tempObj };
  }, {});
};

/**
 *
 * Create an object from the array of dBusCaps and group them by id
 */
let groupBCByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString().trim();
    let policy = item.Policy.trim();
    let name = item.Name.trim();
    let description = item.Description.toString().trim();
    let bbs = [];
    let dps = [];
    let views = [];
    let view0 = createView("legal", idLdom, policy);
    let view1 = createView("organisational", idOdom, policy);
    let view2 = createView("semantic", idSdom, policy);
    let view3 = createView("technical-application", idTAdom, policy);
    let view4 = createView("technical-infrastructure", idTIdom, policy);
    let priority = null;
    let avgAbility = null;

    views.push(view0);
    views.push(view1);
    views.push(view2);
    views.push(view3);
    views.push(view4);

    obj[id] = {
      id,
      policy,
      name,
      description,
      views,
      priority,
      avgAbility,
      bbs,
      dps,
    };

    return obj;
  }, {});
};

function groupBy(obj, key, keyToKeep) {
  if (keyToKeep) {
    return obj.reduce(function (prevObj, current) {
      const tempKey = current[key];
      (prevObj[tempKey] = prevObj[tempKey] || []).push(current[keyToKeep]);
      return prevObj;
    }, {});
  }
  return obj.reduce(function (prevObj, current) {
    const tempKey = current[key];
    (prevObj[tempKey] = prevObj[tempKey] || []).push(current);
    return prevObj;
  }, {});
}

function sumOfArray(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
}

function maxOfArray(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    if (previousValue < currentValue) return currentValue;
    return previousValue;
  }, 0);
}

/**
 * create th with text inside
 * @param {String} valueOnTextNode
 * @returns {DOMElement}
 */
function thWithTextNode(valueOnTextNode) {
  let th = document.createElement("th");
  let text = document.createTextNode(valueOnTextNode);
  th.appendChild(text);
  return th;
}

/**
 * Create span with question icon and the title attribute is the tooltip
 */
const createTooltipSpan = (tooltip) => {
  let tooltipSpan = document.createElement("span");
  tooltipSpan.className = "ml-1";

  tooltipSpan.setAttribute("title", tooltip);

  const icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  return tooltipSpan;
};

/**
 * create th with span inside
 */
function thWithSpanNode(valueOnTextNode, tooltip = "") {
  let th = document.createElement("th");
  let span = document.createElement("span");
  span.innerText = valueOnTextNode;

  if (tooltip) {
    span.appendChild(createTooltipSpan(tooltip));
  }

  th.appendChild(span);
  return th;
}

/**
 * Capitalize a string
 */
function CA(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function init(JSONObj) {
  $("#networkBBs").collapse("hide");
  $("#listBBs").collapse("hide");
  document.getElementById("egovera-portofolio").classList.remove("d-none");
  await draw(JSONObj);
}

const fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file == null) {
    return;
  }
  var reader = new FileReader();
  reader.onload = async function (event) {
    var testo = event.target.result;
    var json = JSON.parse(testo);
    fileContent = json;
    await init(json);
  };
  reader.readAsText(file);
  this.parentElement.className = "";
  this.parentElement.classList.add("d-none");
});

/**
 *
 */
function callBackForRequest(response, json) {
  inputBCJSON = response.dBusCaps;
  inputBBJSON = response.abb;
  inputDPSJSON = response.dPubSer;
  initInputfromJSON();
  readSurveyResult(json);
  createBusinessCapabilityTable();
  drawBusinessCapabilityChart();
  resizeQuandrant();
}

async function draw(json) {
  document.getElementById("reset-work").classList.remove("d-none");
  bcList = {};
  viewsInfra = [];
  $("#listBCs").collapse("show");
  $("#matrixBCs").collapse("show");

  let response = await fetch("/api/backoffice/get-files-old");
  response = await response.json();
  callBackForRequest(response, json);
}

/**
 *
 * @param {String} name
 * @param {Number} id
 * @param {String} policy
 * @param {Number} avgAbility
 * @param {Array} bbs
 * @returns {Array}
 */
function createView(name, id, policy, avgAbility, bbs) {
  avgAbility = avgAbility || null;
  bbs = bbs || [];
  var view = {};
  view.name = name;
  view.id = id;
  view.policy = policy;
  view.avgAbility = avgAbility;
  view.bbs = bbs;
  return view;
}

function initInputfromJSON() {
  viewBCmc.name = "Buisness Capabilities (mission critial)";
  viewBCmc.id = 0;
  viewBCmc.policy = "business agnostic";
  viewBCmc.avgAbility = null;
  viewBCmc.bbs = [];

  let view0 = createView("legal", idLinf, "business agnostic");

  let view1 = createView("organisational", idOinf, "business agnostic");

  let view2 = createView("semantic", idSinf, "business agnostic");

  let view3 = createView("technical-application", idTAinf, "business agnostic");

  let view4 = createView(
    "technical-infrastructure",
    idTIinf,
    "business agnostic"
  );

  viewsInfra.push(view0);
  viewsInfra.push(view1);
  viewsInfra.push(view2);
  viewsInfra.push(view3);
  viewsInfra.push(view4);

  bcList = createBcListObject();
}
const avgDpsAbility = (abbs) => {
  const sum = abbs.reduce((total, value) => (total += value.ability), 0);
  let avg = Number((sum / abbs.length).toFixed(2));
  return avg;
};

/**
 * Create the bcList object with the relations of the abbs, dps and bc
 */
const createBcListObject = () => {
  let ABBs = groupABBByID(inputBBJSON);
  DPSs = groupDPSsByID(inputDPSJSON);
  let DBCs = groupBCByID(inputBCJSON);

  let tempDPSs = { ...DPSs };
  let tempDBCs = { ...DBCs };

  const ABBArray = Object.values(ABBs);
  const DPSArray = Object.values(DPSs);
  const DBCArray = Object.values(DBCs);

  DPSArray.forEach((dps) => {
    const { id } = dps;

    ABBArray.forEach((abb) => {
      if (abb.digPubServ.indexOf(id) > -1) tempDPSs[id].abbs.push(abb);
    });
  });

  DBCArray.forEach((dbc) => {
    const { id } = dbc;

    DPSArray.forEach((dps) => {
      if (dps.dBCs.indexOf(id) > -1) tempDBCs[id].dps.push(dps);
    });
  });

  Object.values(tempDBCs).forEach((bc) => {
    let abbs = [];
    const { dps, id } = bc;
    dps.forEach((dp) => {
      const { abbs: bbs } = dp;
      abbs = [...abbs, ...bbs];
    });
    abbs = [...new Set(abbs)];
    tempDBCs[id].bbs = abbs;

    abbs.forEach((abb) => {
      tempDBCs[id].views.forEach((view) => {
        if (abb.view === view.name) view.bbs.push(abb);
      });
    });
  });

  return tempDBCs;
};

document.getElementById("reset-work").addEventListener("click", function () {
  document.getElementById("bb-div").classList.add("d-none");
  selectedBC = null;
  clickedDPSs = [];
  $("#networkBBs").collapse("hide");
  document.querySelector("#bbTable").innerHTML = "";
  init(fileContent);
});

function quadrantWidth() {
  const quadrant = document.querySelector("#quadrant_div");
  const test = quadrant.getBoundingClientRect();
  const width = test.width;
  quadrant.style.height = width + "px";
  return width;
}

function resizeQuandrant() {
  let width = quadrantWidth();
  drawBusinessCapabilityChart(width);
}

const mapFilterResultstoBcList = (json) => {
  const dictionary = {
    id: "id",
    "National Digital Strategy Fit": "priority",
    "Expected Public Value": "expRandom",
    "Ability to support the dBusCap": "abbRandom",
    "Ability to deliver": "ability",
    budget: "budget",
  };

  const { fullName, organisation, email, country, ...surveyResults } = json;

  let tempBcList = { ...bcList };

  for (let policy in surveyResults) {
    const { BC: busCaps, BB: buildingBlocks } = surveyResults[policy];

    for (let bcIdx = 0; bcIdx < busCaps.length; bcIdx++) {
      const { id, ...answers } = busCaps[bcIdx];

      if (tempBcList[id]) {
        for (let answer in answers) {
          if (!answers.selectedBC) break;
          tempBcList[id][dictionary[answer]] = answers[answer];
        }
      }
    }

    for (let bbIdx = 0; bbIdx < buildingBlocks.length; bbIdx++) {
      const {
        id,
        "Ability to support the dBusCap": bbAbility,
      } = buildingBlocks[bbIdx];

      for (let bc in bcList) {
        const { bbs } = bcList[bc];
        const bb = bbs.filter((bb) => bb.id === id);
        if (bb.length !== 1) continue;
        bb[0].ability = bbAbility;
      }
    }
  }

  Object.values(tempBcList).forEach((bc) => {
    bc.dps.forEach((dps) => {
      dps.dpsAbility = avgDpsAbility(dps.abbs);
    });
  });

  const finalBCList = {};
  for (let policy in surveyResults) {
    const { BC, BB } = surveyResults[policy];
    for (let bc of BC) {
      const { id } = bc;
      finalBCList[id] = tempBcList[id];
    }
  }

  bcList = finalBCList;
};

const randomizeQuandrantValues = () => {
  const bcValues = Object.values(bcList);

  for (let idx = 0; idx < bcValues.length; idx++) {
    bcValues[idx].avgAbility = +(Math.random() * 9 + 1).toFixed(2);
    bcValues[idx].priority = +(Math.random() * 4 + 1).toFixed(0);
  }
};

function readSurveyResult(json) {
  mapFilterResultstoBcList(json);

  for (var z in bcList) {
    var bbs = bcList[z].bbs;
    var count = 0;
    var average = 0;
    for (var i in bbs) {
      count += 1;
      average += bbs[i].ability;
    }

    average /= count;
    bcList[z].avgAbility = Math.round((average || 0) * 10) / 10;

    let views = bcList[z].views;
    for (var j in views) {
      var count_view = 0;
      var average_view = 0;
      let bbs_view = views[j].bbs;

      for (var k in bbs_view) {
        count_view += 1;
        average_view += bbs_view[k].ability;
      }
      average_view /= count_view;

      views[j].avgAbility = Math.round((average_view || 0) * 10) / 10;
    }
  }

  // if (demo) randomizeQuandrantValues();
}

function controlWrapper(controlType, containerId, options) {
  return new google.visualization.ControlWrapper({
    controlType: controlType,
    containerId: containerId,
    options: options,
  });
}

var view;

let strategicSlider;
let expPubValSlider;
let abiToSupdBusCapSlider;
let budgetSlider;
let policyDomainFilter;

let order = [0, 1, 2, 3, 4, 5];

/**
 * Calculate the max of all the budgets
 */
function firstInitMaxBudget() {
  let bcObject = groupBy(Object.values(bcList), "policy");
  let max = 0;

  for (let policy in bcObject) {
    let temp = groupBy(bcObject[policy], "policy", "budget");
    let currentMax = maxOfArray(temp[policy]);
    max = currentMax > max ? currentMax : max;
  }
  maxBudget = max;
}

/**
 * Make all the words in the string policy lowercase
 */
const normalizePolicy = (policy) => {
  return policy
    .split(" ")
    .map((x) => x.toLowerCase())
    .join(" ");
};

const getColorPerPolicy = (policy, opacity = false) => {
  const normalizedPolicy = normalizePolicy(policy);
  const temp = opacity ? policyColorsWithOpacity : policyColors;

  return temp[normalizedPolicy] || "#858796";
};

const getImagePerPolicy = (policy) => {
  const normalizedPolicy = normalizePolicy(policy);

  return policyImages[normalizedPolicy] || "../img/dps.png";
};

/**
 * Create the bubble chart
 */
function drawBusinessCapabilityChart(height) {
  height = height || 1;
  data = new google.visualization.DataTable();
  data.addColumn("string", "ID");
  data.addColumn("number", "National Digital Strategy Fit");
  data.addColumn("number", "Ability to support the dBusCap");
  data.addColumn("string", "Policy domain");
  data.addColumn("number", "Estimated budget");
  data.addColumn("number", "Expected Public Value");

  view = new google.visualization.DataView(data);

  firstInitMaxBudget();

  const colors = [];

  for (var x in bcList) {
    var bc = bcList[x];
    if (bc.priority == null) continue;
    data.addRow([
      bc.id,
      bc.priority,
      bc.avgAbility,
      bc.policy,
      bc.budget,
      bc.expRandom,
    ]);

    const color = getColorPerPolicy(bc.policy);
    if (colors.indexOf(color) === -1) colors.push(color);
  }

  view.setColumns(order);

  dashboard = new google.visualization.Dashboard(
    document.getElementById("dashboard_div")
  );

  strategicSlider = controlWrapper(
    "NumberRangeFilter",
    "dashboard_strategicSlider_div",
    {
      filterColumnLabel: "National Digital Strategy Fit",
      ui: {
        labelStacking: "horizontal",
      },
      minValue: 1,
      maxValue: 5,
    }
  );
  expPubValSlider = controlWrapper(
    "NumberRangeFilter",
    "dashboard_expPubValSlider_div",
    {
      filterColumnLabel: "Expected Public Value",
      ui: {
        labelStacking: "horizontal",
      },
      minValue: 1,
      maxValue: 5,
    }
  );
  abiToSupdBusCapSlider = controlWrapper(
    "NumberRangeFilter",
    "dashboard_abiToSupdBusCapSlider_div",
    {
      filterColumnLabel: "Ability to support the dBusCap",
      ui: {
        labelStacking: "horizontal",
      },
      minValue: 1,
      maxValue: 10,
    }
  );
  budgetSlider = controlWrapper("NumberRangeFilter", "budget_filtering_div", {
    filterColumnLabel: "Estimated budget",
    ui: {
      labelStacking: "horizontal",
      label: "Estimated budget (in millions EUR)",
    },
    minValue: 0,
    maxValue: maxBudget,
  });

  policyDomainFilter = controlWrapper(
    "CategoryFilter",
    "visibility_control_div",
    {
      filterColumnLabel: "Policy domain",
      ui: {
        label: "",
        selectedValuesLayout: "aside",
        caption: "Policy domain",
        cssClass: "filters-div-google",
      },
    }
  );

  var options1 = {
    height: height,
    title: { position: "none" },
    hAxis: {
      title: hAxisLabes[order[1]],
      minValue: 0,
      maxValue: 5,
      ticks: [
        { v: 0, f: "low" },
        { v: 2.5, f: "medium" },
        { v: 5, f: "high" },
      ],
      gridlines: { color: "#747675" },
      baselineColor: "#747675",
    },
    vAxis: {
      title: "Ability to support the dBusCap",
      minValue: 0,
      maxValue: 5,
      ticks: [
        { v: 0, f: "low" },
        { v: 5, f: "med" },
        { v: 10, f: "high" },
      ],
    },
    bubble: {
      textStyle: {
        fontSize: 10,
      },
      opacity: 0.5,
    },
    sizeAxis: {
      minSize: 20,
    },
    colors,
    chartArea: { width: "82%", height: "82%" },
    legend: { position: "top", alignement: "center" },
  };

  chartBubble = new google.visualization.ChartWrapper({
    chartType: "BubbleChart",
    containerId: "quadrant_div",
    options: options1,
  });

  dashboard.bind(
    [
      strategicSlider,
      policyDomainFilter,
      expPubValSlider,
      abiToSupdBusCapSlider,
      budgetSlider,
    ],
    chartBubble
  );
  dashboard.draw(view.toDataTable());

  google.visualization.events.addListener(chartBubble, "ready", function () {
    google.visualization.events.addListener(
      chartBubble,
      "select",
      selectHandler
    );
    google.visualization.events.addListener(
      policyDomainFilter,
      "statechange",
      function (event) {
        const state = policyDomainFilter.getState();
        filteringBcTable(state.selectedValues, false);
      }
    );
    google.visualization.events.addListener(
      chartBubble,
      "statechange",
      function () {
        alert(chartBubble.getDataTable().getNumberOfRows());
      }
    );
  });
}

const scrollToElement = (selector) => {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(selector).offset().top - 40,
    },
    2000
  );
};

const bcInfoNodes = (id, policy, name, budget, spanID) => {
  const pID = document.createElement("p");
  const pPolicy = document.createElement("p");
  const pName = document.createElement("p");
  const pBudget = document.createElement("p");

  pID.innerText = "ID: " + id;
  pPolicy.innerText = "Policy: " + policy;
  pName.innerText = "Name: " + name;
  pBudget.innerHTML =
    "Estimated budget (in millions EUR): " +
    `<span id="${spanID}">${budget} </span `;

  const parent = document.createElement("div");

  parent.appendChild(pID);
  parent.appendChild(pPolicy);
  parent.appendChild(pName);
  parent.appendChild(pBudget);

  return parent;
};

function selectHandler(e) {
  var selection = chartBubble.getChart().getSelection();
  var item = selection[0];
  if (item == null) return;
  document.getElementById("bb-div").classList.remove("d-none");
  selectedValue = data.getValue(item.row, 0);

  clickedDPSs = [];

  $("#networkBBs2").fadeOut();
  $("#network_div").fadeOut(function () {
    if ($("#infratoogle").prop("checked") == false) {
      $("#infratoogle").prop("checked", true);
      toogleInfra = true;
    }

    busOrientation = 1;
    $("#radio1").prop("checked", true);
    $("#networkBBs").collapse("show");
    $("#listBBs").collapse("show");
    $("#network_div").fadeIn();

    drawViewsPredecessorsChart(bcList[selectedValue]);

    dpsNetworkAndCheckbox(bcList[selectedValue].dps, bcList[selectedValue].bbs);

    scrollToElement("#networkBBs");

    selectedBC = selectedValue;
    clickedBC = bcList[selectedValue];

    bbsFillInfo(bcList[selectedBC]);

    document.getElementById("bcDetail").innerHTML = bcInfoNodes(
      bcList[selectedValue].id,
      CA(bcList[selectedValue].policy),
      bcList[selectedValue].name,
      bcList[selectedValue].budget,
      "bcDetails-budget"
    ).innerHTML;
    document.getElementById("dps-network-bc-info").innerHTML = bcInfoNodes(
      bcList[selectedValue].id,
      CA(bcList[selectedValue].policy),
      bcList[selectedValue].name,
      bcList[selectedValue].budget,
      "bcDetails-budget-copy"
    ).innerHTML;
    document.getElementById("bbDetail").innerHTML =
      "<i>please select a builidng block</i>";

    createBuildingBlocksTable(bcList[selectedValue]);
  });
}

$("#orientation").on("change", function () {
  if (document.getElementById("radio1").checked) {
    busOrientation = 1;
  } else if (document.getElementById("radio2").checked) {
    busOrientation = 2;
  } else if (document.getElementById("radio3").checked) {
    busOrientation = 3;
  } else {
    busOrientation = 4;
  }
  drawViewsPredecessorsChart(bcList[selectedValue]);
});

$("#infratoogle").on("change", function () {
  if (toogleInfra) {
    toogleInfra = false;
  } else {
    toogleInfra = true;
  }
  drawViewsPredecessorsChart(bcList[selectedValue]);
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

window.addEventListener("resize", () => {
  resizeQuandrant();
});

/**
 *
 * @param {Array} options The options that the select box should have
 * @param {Array} attribuesList This is an array of objects for the attribues of select box
 * @param {Boolean} firstChildUnvisible If is true , the select box will have place holder the first item of array
 * @returns Select html element
 */

/**
 * Create option html element with attributes
 */
function selectHTMLWithOptions(options, attribuesList) {
  attribuesList = attribuesList || [];
  let select = document.createElement("select");
  for (let attr in attribuesList) {
    select.setAttribute(attr, attribuesList[attr]);
  }

  for (let i = 0; i < options.length; i++) {
    let policy = options[i];
    let option = document.createElement("option");
    option.setAttribute("value", policy );
    option.text = policy;
    select.appendChild(option);
  }
  return select;
}

/**
 * Create number input html element with attributes
 */
function htmlInputNumb(attribuesList) {
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  for (let attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }
  return input;
}

/**
 * Create paragraph html element with attributes
 */
function htmlParagNumb(attribuesList) {
  let input = document.createElement("p");
  for (let attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }
  return input;
}

/**
 * Create dropdow element
 */
function dropDownCheckBox(options, header) {
  let dropdown = document.createElement("div");
  dropdown.classList.add(["dropdown", "show"]);

  dropdown.setAttribute("id", "dropdown_div");

  let headerEl = document.createElement("div");
  headerEl.classList.add("dropdown-toggle");
  headerEl.setAttribute("id", "dropdownMenuLink");
  headerEl.setAttribute("data-toggle", "dropdown");
  headerEl.setAttribute("aria-haspopup", "true");
  headerEl.setAttribute("aria-expanded", "false");
  let headerText = document.createTextNode(header);
  headerEl.appendChild(headerText);

  let dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");

  dropdown.appendChild(headerEl);
  dropdown.appendChild(dropdownMenu);

  for (let i = 0; i < options.length; i++) {
    let id = options[i];
    const label = createLabelWithInputChild(id);
    dropdownMenu.appendChild(label);
  }

  dropdown.addEventListener("change", filteringHandler);

  return dropdown;
}
/**
 * Filter bc table and quandrant
 */
function filteringBcTable(values, quadrant_filtering) {
  const table = document.getElementById("bcTable");
  let tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let tds = tr[i].getElementsByTagName("td");
    if (tds.length < 1) continue;
    let policyColumn = tds[1]
      .querySelector("[policyValue]")
      .getAttribute("policyValue");
    const tempCond = values.map(function (value) {
      return "'" + policyColumn + "' === '" + value + "'";
    });

    let condition = tempCond.join(" || ");
    let valid = condition ? eval(condition) : true;
    if (valid) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
  if (quadrant_filtering) {
    policyDomainFilter.setState({ selectedValues: values });
    policyDomainFilter.draw();
  } else {
    const dropdown = document.getElementById("dropdown_div");
    let inputs = dropdown.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      input.checked = false;
    }

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      for (let i = 0; i < values.length; i++) {
        let value = values[i];
        const id = input.getAttribute("id").split("-")[0];
        if (id.includes(value)) input.checked = true;
      }
    }
  }
}

function createLabelWithInputChild(id) {
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", id + "-dropdown");
  input.setAttribute("value", id);
  let label = document.createElement("label");
  label.setAttribute("for", id + "-dropdown");
  label.appendChild(input);
  let textContent = document.createTextNode(" " + id);
  label.appendChild(textContent);
  label.classList.add("dropdown-item");

  return label;
}

function range(start, end) {
  let ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

function changeSumPerPolicy(inputField) {
  let bcObject = groupBy(Object.values(bcList), "policy");

  let policy = inputField.getAttribute("policy");
  let id = "#" + policy + "-sum";
  policy = policy.split("-").join(" ");
  document.querySelector(id).innerHTML = sumOfArray(
    groupBy(bcObject[policy], "policy", "budget")[policy]
  );
}

function filteringHandler() {
  let dropdown = document.querySelector("#dropdown_div > div.dropdown-menu");
  let inputs = dropdown.querySelectorAll("input[type=checkbox]");
  const values = [];
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    if (input.checked) {
      const value = input.getAttribute("id").split("-")[0];
      values.push(value);
    }
  }

  filteringBcTable(values, true);
}

const updateBcDetailsBudget = (budget, currentBc) => {
  if (currentBc != selectedBC) return;
  $("#bcDetails-budget").text(budget);
  $("#bcDetails-budget-copy").text(budget);
};

function containerWithSelectAndSpan(selectBox, outOf) {
  const customDiv = document.createElement("div");

  let span = document.createElement('span');
  span.innerText = ` out of ${outOf}`;

  customDiv.appendChild(selectBox)
  customDiv.appendChild(span)

  return customDiv;

}

function createBusinessCapabilityTable() {
  let table = document.getElementById("bcTable");
  table.innerHTML = "";
  let thead = table.createTHead();
  let row = thead.insertRow();

  let id = thWithTextNode("ID");
  var th2 = document.createElement("th");

  let name = thWithTextNode("Digital Business Capability");

  let dStrategicFit = thWithSpanNode(
    "National Digital Strategy Fit",
    natDigStrategicFitTooltip
  );

  let publicValue = thWithSpanNode("Expected Public Value", expPubValueTooltip);

  let abilityToSupport = thWithSpanNode(
    "Ability to support the dBusCap",
    abToSuppDbusCapTooltip
  );

  let budgetAlloc = thWithSpanNode(
    "Estimated budget (in millions EUR)",
    budgetTooltip
  );

  row.appendChild(id);
  row.appendChild(th2);
  row.appendChild(name);
  row.appendChild(dStrategicFit);
  row.appendChild(abilityToSupport);
  row.appendChild(publicValue);
  row.appendChild(budgetAlloc);

  let bcObject = groupBy(Object.values(bcList), "policy");
  let policies = Object.keys(bcObject);
  for (let policy in bcObject) {
    let policyArray = bcObject[policy];

    for (let i = 0; i < policyArray.length; i++) {
      let bc = policyArray[i];
      let row = table.insertRow();
      row.insertCell().appendChild(document.createTextNode(bc.id));
      let policySpan = document.createElement("span");
      policySpan.setAttribute("policyValue", bc.policy);
      let policyTextNode = document.createTextNode(bc.policy);
      policySpan.appendChild(policyTextNode);
      row.insertCell().appendChild(policySpan);
      row.insertCell().appendChild(document.createTextNode(bc.name));

      let natDigStrFit = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id,
      });

      natDigStrFit.value = bc.priority;
      natDigStrFit.addEventListener("change", function () {
        for (let y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].priority = Number(this.value);
            let height = quadrantWidth();
            drawBusinessCapabilityChart(height);

            filteringHandler();
            return;
          }
        }
      });
      const natDigStrFitContainer = containerWithSelectAndSpan(natDigStrFit, 5);
      row.insertCell().appendChild(natDigStrFitContainer);

      let abiToSupdBusCap = selectHTMLWithOptions(range(1, 10), {
        priority: "mySelect",
        bc: bc.id,
      });
      abiToSupdBusCap.value = Math.round(bc.avgAbility);
      abiToSupdBusCap.addEventListener("change", function () {
        for (let y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].avgAbility = Number(this.value);
            let height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });


      const abiToSupdBusCapContainer = containerWithSelectAndSpan(abiToSupdBusCap, 10);
      row.insertCell().appendChild(abiToSupdBusCapContainer);

      let expPubVal = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id,
      });
      expPubVal.value = bc.expRandom;
      expPubVal.addEventListener("change", function () {
        for (let y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].expRandom = Number(this.value);
            let height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });

      const expPubValContainer = containerWithSelectAndSpan(expPubVal, 5);
      row.insertCell().appendChild(expPubValContainer);

      let budgetFiled = htmlInputNumb({
        priority: "mySelect",
        policy: policy.split(" ").join("-"),
        bc: bc.id,
        min: 0,
        id: "total-" + bc.id,
      });
      budgetFiled.value = bc.budget;

      budgetFiled.addEventListener("change", function () {
        for (let y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            let newBudget = Number(Number(this.value).toFixed(2));
            if (newBudget < 0) newBudget = 0;
            bcList[y].budget = newBudget;
            this.value = newBudget;
            let height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            changeSumPerPolicy(this);
            filteringHandler();
            updateBcDetailsBudget(newBudget, y);
            return;
          }
        }
      });
      row.insertCell().appendChild(budgetFiled);
    }
    let row = table.insertRow();

    row.insertCell().appendChild(document.createTextNode(""));

    let policySumParag = htmlParagNumb({
      id: policy + "-policyField",
      policyValue: policy,
    });
    policySumParag.innerHTML = policy;
    row.insertCell().appendChild(policySumParag);

    row.insertCell().appendChild(document.createTextNode(""));

    row.insertCell().appendChild(document.createTextNode(""));

    row.insertCell().appendChild(document.createTextNode(""));

    let totalParagraph = htmlParagNumb({ id: policy + "-totalInAbbfiled" });
    totalParagraph.innerHTML = "Total budget";
    row.insertCell().appendChild(totalParagraph);

    let budgets = groupBy(bcObject[policy], "policy", "budget");
    let sumOfBudgets = htmlParagNumb({
      id: policy.split(" ").join("-") + "-sum",
      priority: "mySelect",
    });
    sumOfBudgets.innerHTML = sumOfArray(budgets[policy]);

    row.insertCell().appendChild(sumOfBudgets);
  }

  let selectEl = dropDownCheckBox(policies, "Policy Domain");
  th2.appendChild(selectEl);

  var els = document.getElementById("bcTable").getElementsByTagName("th");

  for (var i = 0; i < els.length; i++) {
    els[i].style.paddingTop = "4px";
    els[i].style.paddingBottom = "4px";
  }

  var els = document.getElementById("bcTable").getElementsByTagName("td");

  for (var i = 0; i < els.length; i++) {
    els[i].style.paddingTop = "2px";
    els[i].style.paddingBottom = "2px";
  }
}

/**
 *
 * @param {Number} id
 * @param {String} shape
 * @param {String} image
 * @param {String} label
 * @param {String} title
 * @param {Array} color
 * @param {Number} x
 * @param {Number} y
 * @param {String} font
 * @param {String} DIR
 */

function createDigitalTransformNode(
  id,
  shape,
  image,
  label,
  title,
  color,
  x,
  y,
  hidden,
  font,
  DIR
) {
  if (!x && x !== 0) {
    x = null;
  }
  if (!y && y !== 0) {
    y = null;
  }
  (font = font || "14px arial"), (DIR = DIR || "../img/");
  hidden = hidden || false;
  var node = [];
  node.id = id;
  node.shape = shape;
  node.image = DIR + image;
  node.font = font;
  node.label = label;
  node.title = title;
  node.color = color;
  node.hidden = hidden;
  node.x = x;
  node.y = y;
  return node;
}

const syncCheckboxAfterNodesClicked = (dps) => {
  const inputs = dpsSelectDivList.querySelectorAll("input");

  for (let idx = 0; idx < inputs.length; idx++) {
    inputs[idx].checked = false;
    if (inputs[idx].getAttribute("data-dig-pub-service") === dps)
      inputs[idx].checked = true;
  }
};

const dpsNetworkAndCheckbox = (dpss, bbs) => {
  drawDPSNetwork(dpss, bbs);
  createFilterDPSCheckbox(dpss);
};

/**
 * Create and draw dps network chart
 */
const drawDPSNetwork = (dpss, bbs) => {
  if (DPSnetwork !== null) {
    DPSnetwork.destroy();
    DPSnetwork = null;
  }

  DPSNetNodes = new vis.DataSet();

  let length = dpss.length;

  for (let idx = 0; idx < length; idx++) {
    let dps = dpss[idx];
    let { policy, id: dpsID, name: label, dpsAbility } = dps;

    let title = `<div>
    ${dpsDetailChild("ID: ", dpsID).outerHTML}
    ${dpsDetailChild("Name: ", label).outerHTML}
    ${dpsDetailChild("Policy: ", policy).outerHTML}
    ${dpsDetailChild("Average Ability to support: ", dpsAbility).outerHTML}
    </div>`;
    let node = {
      id: idx,
      image: getImagePerPolicy(policy),
      dpsID,
      label: `${dpsID} - ${label}`,
      title,
      hidden: false,
      color: {
        background: getColorPerPolicy(policy, true),
      },
    };
    DPSNetNodes.add(node);
  }

  let options = {
    interaction: { hover: true },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      shape: "circularImage",
      shadow: true,
      font: { color: "#000", size: 17 },
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
    },
    physics: {
      forceAtlas2Based: {
        springLength: -10,
      },
      minVelocity: 0.75,
      solver: "forceAtlas2Based",
      timestep: 0.53,
    },
  };
  let data = {
    nodes: DPSNetNodes,
  };

  let container = document.querySelector("#dps-network-div");
  DPSnetwork = new vis.Network(container, data, options);

  if (DPSnetwork !== null) {
    DPSnetwork.on("click", (properties) => {
      if (properties.nodes.length === 0) return;

      let id = properties.nodes[0];

      let nodes = DPSNetNodes.get();

      let node = nodes.find((node) => node.id === id);
      let dps = dpss.filter((dp) => dp.id === node.dpsID)[0];
      clickedDPSs = [dps.id];
      syncCheckboxAfterNodesClicked(node.dpsID);
      const newBBs = bbs.filter((bb) => bb.digPubServ.includes(node.dpsID));
      createBuildingBlocksTable({ bbs: newBBs });
      filternetwork2([node.dpsID]);
      bbsMultipleDPSInfo([dps.name]);
      drawViewsPredecessorsChart(bcList[selectedBC], clickedDPSs);
    });
  }
};

/**
 * Helper function
 */
const dpsDetailChild = (key, value) => {
  const div = document.createElement("div");
  const spanLeft = document.createElement("span");
  const spanRight = document.createElement("span");
  div.appendChild(spanLeft);
  div.appendChild(spanRight);

  spanLeft.innerText = key;
  spanRight.innerText = value;

  return div;
};

const filternetwork2 = (dpsIDS) => {
  if (!network2Nodes) return;
  let condition = "";
  let dpsLength = dpsIDS.length;

  if (dpsLength === 0) {
    network2Nodes.forEach((node) => {
      let hidden = false;
      network2Nodes.update({ id: node.id, hidden: hidden });
    });
    return;
  }

  for (let idx = 0; idx < dpsLength; idx++) {
    let id = dpsIDS[idx];
    condition += `node.dps.indexOf("${id}") > -1`;
    if (idx < dpsLength - 1) condition += " || ";
  }

  const temp = new vis.DataSet();

  network2Nodes.forEach((node) => {
    let hidden;
    if (eval(condition)) {
      hidden = false;
    } else {
      hidden = true;
    }

    temp.add({ ...node, hidden });
  });

  network2Nodes.clear();
  temp.forEach((node) => network2Nodes.add(node));
};

const createFilterDPSCheckbox = (dpss) => {
  if (dpss.length === 0) {
    return;
  }
  dpsSelectDivList.innerHTML = "";

  for (let idx = 0; idx < dpss.length; idx++) {
    let dps = dpss[idx];

    const li = document.createElement("li");
    const div = document.createElement("div");
    const dpsName = dps.name;
    const textNode = document.createElement("span");
    textNode.textContent = `${dps.id} - ${dpsName}`;
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-dig-pub-service", dps.id);

    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(textNode);
    dpsSelectDivList.appendChild(li);
  }
};

const calculateAvgAbilityPerViewAndDpss = (view, dpss = []) => {
  if (dpss.length === 0) {
    return view.avgAbility;
  }

  const abbsToCalculate = view.bbs.filter((bb) => {
    for (let idx = 0; idx < dpss.length; idx++) {
      if (bb.digPubServ.indexOf(dpss[idx]) > -1) return true;
    }
    return false;
  });

  const total = abbsToCalculate.reduce((sum, abb) => (sum += abb.ability), 0);
  if (abbsToCalculate.length === 0) return 0;
  const average = total / abbsToCalculate.length;

  return average;
};

/**
 * Create and draw the dBusCaps chart
 */
function drawViewsPredecessorsChart(bc, dpss = []) {
  if (network !== null) {
    network.destroy();
    network = null;
  }

  if (bc.policy == "Business Agnostic") {
    toogleInfra = false;
  }

  let showNonInfra = true;

  if (
    clickedDPSs.length > 0 &&
    clickedDPSs.every((id) => id.startsWith("BA"))
  ) {
    showNonInfra = false;
    toogleInfra = true;
  }

  var bbs = bc.bbs;
  var nodes = [];
  var edges = [];

  var color = [];
  color.background = "#fff";
  var bcNode = createDigitalTransformNode(
    idBCdom,
    "circularImage",
    "bc.png",
    "ID:" +
      bc.id +
      ", " +
      bc.name +
      ", \nNational Digital Strategy Fit: " +
      bc.priority +
      " out of 5, \nAbility to support the dBusCap: " +
      bc.avgAbility +
      " out of 10",
    "ID:" +
      bc.id +
      ", " +
      bc.name +
      ", \nNational Digital Strategy Fit: " +
      bc.priority +
      " out of 5, \nAbility to support the dBusCap: " +
      bc.avgAbility +
      " out of 10",
    color,
    100,
    10
  );
  nodes.push(bcNode);

  var color = [];
  color.background = "#fff";
  var start = createDigitalTransformNode(
    100,
    "circularImage",
    "start.png",
    "Start",
    "Start",
    color,
    -10,
    0
  );

  nodes.push(start);
  let views = bc.views;
  var count = 0;
  if (showNonInfra) {
    for (let i in views) {
      count += 1;
      let id = null;
      var color = [];
      var image = null;
      var labelInit = null;
      switch (String(views[i].name)) {
        case "legal":
          image = "legal.png";
          labelInit = "L";
          id = idLdom;
          break;
        case "organisational":
          image = "org.png";
          id = idOdom;
          labelInit = "O";
          break;
        case "semantic":
          image = "data.png";
          id = idSdom;
          labelInit = "S";
          break;
        case "technical-application":
          image = "TA.png";
          id = idTAdom;
          labelInit = "TA";
          break;
        case "technical-infrastructure":
          image = "tech.png";
          id = idTIdom;
          labelInit = "TI";
          break;
        default:
          image = "tech.png";
          break;
      }
      const currentAvgAbility = calculateAvgAbilityPerViewAndDpss(
        views[i],
        clickedDPSs
      );
      color.background = getColorPerPolicy(views[i].policy, true);

      if (views[i].bbs.length == 0) {
        if (labelInit === null) continue;
        var label = labelInit + " - " + CA(bc.policy);
      } else {
        var label =
          labelInit +
          " - " +
          CA(bc.policy) +
          ",\n" +
          currentAvgAbility.toFixed(1) +
          " out of 10";
      }
      let node = createDigitalTransformNode(
        id,
        "circularImage",
        image,
        label,
        label,
        color,
        10 * i,
        0
      );
      nodes.push(node);
    }
  }
  var bcInfraNode = [];
  bcInfraNode.id = idBCinf;

  if (toogleInfra) {
    var color = [];
    color.background = "#fff";
    bcInfraNode = createDigitalTransformNode(
      idBCinf,
      "circularImage",
      "bc.png",
      "Digital business capability Infrastructure," + "\nMission Critical",
      "Digital business capability Infrastructure," + "\nMission Critical",
      color,
      100,
      50,
      true
    );
    nodes.push(bcInfraNode);

    for (let i in viewsInfra) {
      let id = null;
      var color = [];
      var image = null;
      var labelInit = null;
      switch (String(viewsInfra[i].name)) {
        case "legal":
          image = "legal.png";
          id = idLinf;
          labelInit = "L";
          break;
        case "organisational":
          image = "org.png";
          id = idOinf;
          labelInit = "O";
          break;
        case "semantic":
          image = "data.png";
          id = idSinf;
          labelInit = "S";
          break;
        case "technical-application":
          image = "TA.png";
          id = idTAinf;
          labelInit = "TA";
          break;
        case "technical-infrastructure":
          image = "tech.png";
          id = idTIinf;
          labelInit = "TI";
          break;
        default:
          image = "tech.png";
          break;
      }

      color.background = getColorPerPolicy(viewsInfra[i].policy, true);

      var label = labelInit + " - Business agnostic";

      let node = createDigitalTransformNode(
        id,
        "circularImage",
        image,
        label,
        label,
        color,
        10 * i,
        -10
      );

      nodes.push(node);
    }
  }

  if (busOrientation == 1) {
    const startToPoint = showNonInfra ? idLdom : idLinf;
    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idLdom, to: idOdom, dashes: false },
      { from: idOdom, to: idSdom, dashes: false },
      { from: idOdom, to: idTIdom, dashes: false },
      { from: idTIdom, to: idTAdom, dashes: false },
      { from: idSdom, to: idTAdom, dashes: false },
      // { from: idTAdom, to: bcNode.id, dashes: true },

      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: idOinf, dashes: false },
      { from: idLinf, to: idSinf, dashes: false },
      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idSinf, dashes: false },
      { from: idOinf, to: idTIinf, dashes: false },
      { from: idSinf, to: idSdom, dashes: true },
      { from: idSinf, to: idTAinf, dashes: false },
      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTIinf, to: idTAinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idTAinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idTAdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idTAinf, to: bcNode.id, dashes: true });
    }
  } else if (busOrientation == 2) {
    const startToPoint = showNonInfra ? idOdom : idOinf;

    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idOdom, to: idTIdom, dashes: false },
      { from: idOdom, to: idSdom, dashes: false },
      { from: idTIdom, to: idTAdom, dashes: false },
      { from: idSdom, to: idTAdom, dashes: false },
      { from: idTAdom, to: idLdom, dashes: false },
      // { from: idLdom, to: bcNode.id, dashes: true },

      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idTIinf, dashes: false },
      { from: idOinf, to: idSinf, dashes: false },
      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTIinf, to: idTAinf, dashes: false },
      { from: idSinf, to: idTAinf, dashes: false },
      { from: idSinf, to: idSdom, dashes: true },
      { from: idTAinf, to: idLinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idLdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idLinf, to: bcNode.id, dashes: true });
    }
  } else if (busOrientation == 3) {
    const startToPoint = showNonInfra ? idSdom : idSinf;
    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idSdom, to: idOdom, dashes: false },
      { from: idOdom, to: idTAdom, dashes: false },
      { from: idOdom, to: idTIdom, dashes: false },
      { from: idTIdom, to: idTAdom, dashes: false },
      { from: idTAdom, to: idLdom, dashes: false },
      // { from: idLdom, to: bcNode.id, dashes: true },

      { from: idSinf, to: idSdom, dashes: true },
      { from: idSinf, to: idOinf, dashes: false },
      { from: idOinf, to: idTAinf, dashes: false },
      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idTIinf, dashes: false },
      { from: idTIinf, to: idTAinf, dashes: false },
      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTAinf, to: idLinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idLdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idLinf, to: bcNode.id, dashes: true });
    }
  } else {
    const startToPoint = showNonInfra ? idTIdom : idTIinf;
    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idTIdom, to: idOdom, dashes: false },
      { from: idOdom, to: idTAdom, dashes: false },
      { from: idOdom, to: idSdom, dashes: false },
      { from: idSdom, to: idTAdom, dashes: false },
      { from: idTAdom, to: idLdom, dashes: false },
      // { from: idLdom, to: bcNode.id, dashes: true },

      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTIinf, to: idOinf, dashes: false },
      { from: idOinf, to: idTAinf, dashes: false },
      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idSinf, dashes: false },
      { from: idSinf, to: idTAinf, dashes: false },
      { from: idSinf, to: idSdom, dashes: true },
      { from: idTAinf, to: idLinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idLdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idLinf, to: bcNode.id, dashes: true });
    }
  }

  var container = document.getElementById("network_div");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    physics: true,
    interaction: { hover: true },
    autoResize: true,

    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA",
      },
      font: { color: "#000", size: 10 },
      shadow: true,
    },
    edges: {
      smooth: { type: "dynamic", forceDirection: "horizontal", roundness: 0.4 },
      color: "gray",
      arrows: { to: { enabled: true } },
      shadow: true,
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
    },
    physics: {
      forceAtlas2Based: {
        springLength: -10,
      },
      minVelocity: 0.75,
      solver: "forceAtlas2Based",
      timestep: 0.53,
    },
  };
  network = new vis.Network(container, data, options);

  network.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    if (selectedNodeID <= idBCdom) {
      console.log("business capability node");
    } else if (selectedNodeID == idBCinf) {
      selectedView = viewBCmc;

      createBuildingBlocksTable(selectedView);
      drawIntraViewsPredecessorsChart(selectedView);

      document.getElementById("viewDetail").innerHTML =
        "<i>Policy: </i>" +
        CA(selectedView.policy) +
        "<br><i>Buisness capabilities (mission critial)</i>";
      document.getElementById("bbDetail").innerHTML =
        "<i>please select a builidng block</i>";
      $("#networkBBs2").fadeIn();
      $("#network_div2").fadeIn();
    } else if (selectedNodeID <= idTIdom) {
      for (let x in views) {
        if (views[x].id == selectedNodeID) {
          selectedView = views[x];

          if (clickedDPSs.length === 0) return;

          const abbs = filterABBSBaseDPS(selectedView.bbs);
          const newView = { ...selectedView };
          newView.bbs = abbs;

          document.getElementById("viewDetail").innerHTML =
            "<i>Policy: </i>" +
            CA(selectedView.policy) +
            "<br><i>Name: </i>" +
            CA(selectedView.name);

          const tableBBs = abbs.filter((abb) => !abb.hidden);
          createBuildingBlocksTable({ bbs: tableBBs });
          drawIntraViewsPredecessorsChart(newView);

          document.getElementById("bbDetail").innerHTML =
            "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else if (selectedNodeID <= idTIinf) {
      for (let x in viewsInfra) {
        if (viewsInfra[x].id == selectedNodeID) {
          selectedView = viewsInfra[x];

          if (clickedDPSs.length === 0) return;
          const abbs = filterABBSBaseDPS(selectedView.bbs);
          const newView = { ...selectedView };
          newView.bbs = abbs;
          const tableBBs = abbs.filter((abb) => !abb.hidden);
          createBuildingBlocksTable({ bbs: tableBBs });
          drawIntraViewsPredecessorsChart(newView);

          document.getElementById("viewDetail").innerHTML =
            "<i>Policy: </i>" +
            CA(selectedView.policy) +
            "<br><i>Name: </i>" +
            CA(selectedView.name);
          document.getElementById("bbDetail").innerHTML =
            "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else {
      console.log("start button or undefined");
    }
  });
}

const filterABBSBaseDPS = (abbs) => {
  return abbs.map((abb) => {
    for (let idx = 0; idx < clickedDPSs.length; idx++) {
      let dps = clickedDPSs[idx];
      if (abb.digPubServ.indexOf(dps) > -1) {
        abb.hidden = false;
        return abb;
      }
    }
    abb.hidden = true;
    return abb;
  });
};

/**
 * Create elements for info at bbs chart
 */
const bbsFillInfo = (details) => {
  $("#networkBBs2-dbc-info > .info").html(`
      <div>
        <span>ID: </span>
        <span>${details.id}</span>
      </div>
      <div>
        <span>Policy: </span>
        <span>${details.policy}</span>
      </div>
      <div>
        <span>Name: </span>
        <span>${details.name}</span>
      </div>
  `);
};

const filterBBTableWithMultipleDPS = (bbs) => {
  let bbsIDs = bbs.map((bb) => bb.id);

  const tableBodyRows = document.querySelectorAll("#bbTable > tbody > tr");

  for (let rowIdx = 0; rowIdx < tableBodyRows.length; rowIdx++) {
    let tr = tableBodyRows[rowIdx];
    tr.setAttribute("style", "");
    const td = tr.querySelector("td:first-child");
    const tdValue = td.textContent;
    if (bbsIDs.indexOf(tdValue) === -1) tr.style.display = "none";
  }
};
/**
 * 
 Create and draw bb chart
 */
function drawIntraViewsPredecessorsChart(view) {
  if (network2 !== null) {
    network2.destroy();
    network2 = null;
  }

  var bbs = view.bbs;

  if (bbs.length == 0 || bbs.every((bb) => bb.hidden === true)) {
    alert(
      "There are no building blocks available for the filter combination selected"
    );
    $(".networkBBs2-no-results").removeClass("d-none");
    return;
  }

  $(".networkBBs2-no-results").addClass("d-none");

  var nodes = [];
  var edges = [];

  for (let i in bbs) {
    let bb = bbs[i];

    let image;
    if (view.name == "Buisness Capabilities (mission critial)") {
      image = "bc.png";
    } else {
      image = "rank/" + Math.round(bb.ability) + ".png";
    }

    var label = ` ${CA(bb.abb || "")
      .replace(/.{20}\S*\s+/g, "$&@")
      .split(/\s+@/)
      .join("\n")}`;

    const title = `<div class="network2-tooltips">
    <div>ID: ${bb.id} </div>
    <div>Name: ${bb.abb} </div>
    <div>Policy Domain: ${bb.policy} </div>
    <div>DPS: ${bb.digPubServ.join(", ")} </div>
    <div>Ability to support: ${bb.ability} </div>
  </div>`;

    var color = [];
    color.background = "#fff";

    let node = createDigitalTransformNode(
      bb.id,
      "circularImage",
      image,
      label,
      title,
      color
    );

    node.dps = bb.digPubServ;
    node.hidden = bb.hidden;

    nodes.push(node);

    var childs = bb.successors;
    for (let y in childs) {
      var childID = childs[y];
      var edge = [];
      edge.from = bb.id;
      edge.to = childID;
      edges.push(edge);
    }
  }

  network2Nodes = new vis.DataSet(nodes);

  var container = document.getElementById("network_div2");
  var data = {
    nodes: network2Nodes,
    edges: edges,
  };
  var options = {
    physics: true,
    interaction: { hover: true },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA",
      },
      font: {
        color: "#000",
        size: 10,
      },

      shadow: true,
    },
    edges: {
      smooth: { type: "dynamic", forceDirection: "horizontal", roundness: 0.4 },
      color: "gray",
      arrows: { to: { enabled: true } },
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
    },
    physics: {
      forceAtlas2Based: {
        springLength: -10,
      },
      minVelocity: 0.75,
      solver: "forceAtlas2Based",
      timestep: 0.53,
    },
  };

  network2 = new vis.Network(container, data, options);
  network2.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    var bbs = selectedView.bbs;
    for (let x in bbs) {
      if (bbs[x].id == selectedNodeID) {
        if (bbs[x].area == null) {
          document.getElementById("bbDetail").innerHTML =
            "<i>ID: </i>" +
            bbs[x].id +
            "<br><i>name: </i>" +
            bbs[x].abb +
            "</i>";
          "<br><i>Ability to support the dBusCap: " + bbs[x].ability + "</i>";
        } else {
          document.getElementById("bbDetail").innerHTML =
            "<i>ID: </i>" +
            bbs[x].id +
            "<br><i>Area: </i>" +
            bbs[x].area +
            "<br><i>Ability to support the dBusCap: " +
            bbs[x].ability +
            "</i>";
        }

        return;
      }
    }
  });

  network2.once("beforeDrawing", function () {
    network2.focus(1, {
      scale: 10,
    });
  });
  network2.once("afterDrawing", function () {
    network2.fit({
      animation: {
        duration: 1300,
        easingFunction: "easeInQuad",
      },
    });
  });
}

function filterBBTableByID() {}

/**
 * 
 Create bb table
 */
function createBuildingBlocksTable(bc) {
  let table = document.getElementById("bbTable");
  table.innerHTML = "";
  let thead = table.createTHead();
  let row = thead.insertRow();

  let th1 = thWithTextNode("ID");
  let th2 = thWithTextNode("View");
  let th3 = thWithTextNode("Area");
  let th4 = thWithTextNode("Name");
  let th5 = thWithTextNode("Description");
  let th6 = thWithTextNode("Ability to support the dBusCap");
  let th7 = thWithTextNode("IDs' successors");
  let th8 = thWithTextNode("Digital Public service");

  row.appendChild(th1);
  row.appendChild(th2);
  row.appendChild(th3);
  row.appendChild(th4);
  row.appendChild(th5);
  row.appendChild(th6);
  row.appendChild(th7);
  row.appendChild(th8);

  let body = document.createElement("tbody");
  table.appendChild(body);

  var bbs = Array.from(new Set(bc.bbs));

  for (var k in bbs) {
    let row = body.insertRow();

    row.insertCell().appendChild(document.createTextNode(bbs[k].id));

    row.insertCell().appendChild(document.createTextNode(bbs[k].view));

    row.insertCell().appendChild(document.createTextNode(bbs[k].area));

    row.insertCell().appendChild(document.createTextNode(bbs[k].abb));

    row.insertCell().appendChild(document.createTextNode(bbs[k].description));

    row.insertCell().appendChild(document.createTextNode(bbs[k].ability));

    let succs = bbs[k].successors.join(", ");

    let digPubServs = bbs[k].digPubServ.join(", ");

    row.insertCell().appendChild(document.createTextNode(succs));

    row.insertCell().appendChild(document.createTextNode(digPubServs));
  }
}

document
  .querySelector("#policy-filter-span")
  .addEventListener("click", function () {
    this.classList.toggle("goog-combobox-active");
    let div = this.querySelector("#policy-filter-span > div");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });

let xAxisValues = document.querySelectorAll("#policy-filter-span > div > div");

for (let i = 0; i < xAxisValues.length; i++) {
  xAxisValues[i].addEventListener("click", function () {
    let text = xAxisValues[i].textContent;
    filterXAxis(xAxisValues[i].getAttribute("value"), text.trim());
  });
}
/**
 * Change the bubble chart's x axis
 */
const filterXAxis = function (value, valueToShow) {
  if (value === "National digital strategy Fit") {
    order = [0, 1, 2, 3, 4, 5];
  } else if (value === "Expected public value") {
    order = [0, 5, 2, 3, 4, 1];
  }

  document
    .querySelector("#policy-filter-span > input ")
    .setAttribute("placeholder", valueToShow);

  view.setColumns(order);

  drawBusinessCapabilityChart(quadrantWidth());
};

/**
 * Html selects for dps network
 */
const dpsSelectDivList = document.querySelector(".dps-select-div ul");
dpsSelectDivList.addEventListener("click", (e) => {
  const element = e.target;
  let input;
  let checked;
  if (element.tagName !== "INPUT") {
    input = element.parentElement.querySelector("input");
    checked = !input.checked;
  } else {
    input = element;
    checked = input.checked;
  }

  input.checked = checked;
  if (element.tagName !== "INPUT") {
    let event = new Event("change", { bubbles: true });
    element.dispatchEvent(event);
  }
});

const filteringDpsNetwork = (dpss) => {
  let temp = new vis.DataSet();

  DPSNetNodes.forEach((node) => {
    DPSNetNodes.update({ id: node.id, hidden: false });
    temp.add({ ...node, hidden: false });
  });

  if (dpss.length === 0) {
    DPSNetNodes.clear();
    temp.forEach((node) => DPSNetNodes.add(node));
    return;
  }
  temp = new vis.DataSet();
  DPSNetNodes.forEach((node) => {
    let hidden;
    if (dpss.indexOf(node.dpsID) > -1) {
      hidden = false;
    } else {
      hidden = true;
    }
    node.hidden = hidden;
    temp.add({ ...node, hidden });
    DPSNetNodes.update({ id: node.id, hidden: hidden });
  });

  DPSNetNodes.clear();
  temp.forEach((node) => DPSNetNodes.add(node));
};

dpsSelectDivList.addEventListener("change", (e) => {
  const dpsElements = dpsSelectDivList.querySelectorAll("input:checked");
  const dps = [];
  for (let idx = 0; idx < dpsElements.length; idx++) {
    dps.push(dpsElements[idx].getAttribute("data-dig-pub-service"));
  }

  const { dps: allBcDps } = clickedBC;
  const dpsNames = [];
  clickedDPSs = dps;

  dps.forEach((dp) => {
    dpsNames.push(allBcDps.filter((ps) => ps.id === dp)[0].name);
  });

  bbsMultipleDPSInfo(dpsNames);

  let filteredBBSs;

  if (dps.length > 0) {
    filteredBBSs = clickedBC.bbs.filter((bb) => {
      for (let idx = 0; idx < bb.digPubServ.length; idx++) {
        if (dps.indexOf(bb.digPubServ[idx]) > -1) return true;
      }
      return false;
    });
    console.log(filteredBBSs);
  } else {
    filteredBBSs = clickedBC.bbs;
  }
  createBuildingBlocksTable({ bbs: filteredBBSs });
  filternetwork2(dps);
  filteringDpsNetwork(dps);
  drawViewsPredecessorsChart(clickedBC, dps);
});

/**
 * 
 Write dps info next to bb chart
 */
const bbsMultipleDPSInfo = (names) => {
  names = names.map((name) => `<li>${name}</li>`).join("\n");
  $("#networkBBs2-dps-info > .info").html(
    `<ul class="networkBBs2-dps-info-list" >
      ${names}
    </ul>`
  );
};

$(document).on("scroll", function () {
  let scrollDistance = $(this).scrollTop();
  let bbStart = $("#bb-div").offset().top;
  let windowHeight = $(window).height();

  if (bbStart === 0) return;

  if (scrollDistance >= bbStart - windowHeight) {
    $(".scroll-to-dps").fadeIn().css({ display: "flex" });
  } else {
    $(".scroll-to-dps").fadeOut();
  }
});

$(".scroll-to-dps").on("click", function () {
  scrollToElement("#networkBBs");
});
