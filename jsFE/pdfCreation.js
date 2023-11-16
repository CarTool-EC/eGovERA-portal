import "regenerator-runtime/runtime";
import "chartjs-plugin-annotation";
import { Grid } from "gridjs";
import FILES from "./requestSurvey";
import "./roadmap";
import { clickedDPSs } from "./roadmap";
let fileContent = {};

let myChart;

// *********************************************************
// PDF Creation Functionality (with jspdf & jspdf.autotalbe)
// *********************************************************

/**
 * Adds the explanatory texts in the PDF
 *
 * @param {Object} pdf PDF Object
 * @param {Number} startX x coordinate
 * @param {Number} startY y coordinate
 * @param {Number} sentenceNum key for the addExplanatoryText
 */
function addExplanatoryText(pdf, startX, startY, sentenceNum) {
  const explanatorySentences = {
    1: [
      "The quadrant represents the",
      "scores assigned to the evaluated digital",
      "business capability/ies, according to the",
      "following parameters:",
      "   • National Strategy Fit",
      "   • Ability to support the dBusCap",
      "   • Target Perspective Ability to Support",
      "     dBusCap",
      "   • Expected Public Value and the",
      "   • Estimated budget (in millions EUR)",
    ],
    2: [
      "In addition to the information visible from the quadrant, in the following table you can find a summary of the Capability ",
      "Assessment Results. In particular, the below table shows the current MS's ability to support the evaluated digital ",
      "business capability/ies and the target ability to support the evaluated Digital Business Capabilities. As a result, the ",
      "estimated budget aims to fulfil the GAP between the 'AS IS ability' and the target prospective ability. Moreover, the ",
      "scores are reported per area/view (legal, organisation, semantic, technical-application and technical infrastructure).",
      "Finally, you find a summary of the assigned parameters (National Digital fit, Expected Public Value and Estimated ",
      "Budget) to evaluated Digital Business Capability/ies.",
    ],
    3: [
      "The following table sumarises the selected Digital Business Capabilities",
    ],
    4: [
      "Below, you have a summary table and a graphical representation of all the Digital Public Services in",
      "scope, meaning the ones supporting the selected Digital Business Capability",
    ],
    5: [
      "The following graph represents the MS's Digital Transformation Roadmap, by which the user can",
      "select the different orientation for the implementation of the selected digital bysiness capability",
    ],
    6: [
      "The following table summarises the selected Digital Business Capabilities",
    ],
    7: [
      "Below you can see the graphical representation of the functionalities (i.e. Skills, expertise, experience",
      "etc.) supporting the selected Digital Business Capability, based on the MS's orientation (legal,",
      "organizational, semantic and technical) priority chosen. The content of the nodes (expressed by the",
      "blue color) is variable because it reflects the relation between the ABBs and the ability to support",
      "the selected Digital Business Capability",
    ],
    8: [
      "The following is a table containing the list of the functionalities (i.e. Skills, expertise, experience, etc.)",
      "needed to implement the selected Digital Business Capability",
    ],
  };

  // Gap between lines
  let lineGap;
  // set font parameters
  if (sentenceNum === 2) {
    pdf.setFontSize(10);
    lineGap = 5;
  } else {
    pdf.setFontSize(12);
    lineGap = 7;
  }
  pdf.setFontType("italic");
  pdf.setTextColor(0, 0, 0); // black

  // Add the sentences into the PDF
  let text = explanatorySentences[sentenceNum];
  let y = startY;
  for (let i = 0; i < text.length; i++) {
    pdf.text(text[i], startX, y);
    y = y + lineGap;
  }
}

/**
 * Creates the header and footer for the PDF
 *
 * @param {*} pdf PDF Object
 * @param {*} title PDF's title
 */
function addPageTemplate(pdf, titleNum) {
  // Title's object
  const titleInfo = {
    1: { title: "Introduction", coordinates: [88, 20] },
    2: {
      title: "Portfolio Management Decision Support",
      coordinates: [45, 20],
    },
    3: {
      title: "Digital Transformation Roadmap Decision Support",
      coordinates: [30, 20],
    },
    4: { title: "eGovERA© Building Blocks", coordinates: [65, 20] },
  };

  // Add top right icon
  const rightIcon = new Image();
  rightIcon.src = "../img/ec2.png";
  const rightIconCoords = [180, 1, 25, 18]; // x, y, width, height
  pdf.addImage(rightIcon, "png", ...rightIconCoords);

  // Add top left icon and sentence
  const leftIcon = new Image();
  leftIcon.src = "../img/egovera-icon2.png";
  const leftIconCoords = [4, 2, 12, 11];
  pdf.addImage(leftIcon, "png", ...leftIconCoords);
  const topSentCoords = [15, 10]; // x, y
  const topSentence = "eGovERA ©";
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontType("normal");
  pdf.setFontSize(15);
  pdf.text(topSentence, ...topSentCoords);

  // Add bottom left sentence
  const leftSentCoords = [10, 292]; // x, y
  const leftSentence = "Copyright © European Commission 2022";
  pdf.setFontSize(10);
  pdf.setTextColor(192, 192, 192);
  pdf.setFontType("italic");
  pdf.text(leftSentence, ...leftSentCoords);

  // Add bottom right sentence and underline
  const rightSentCoords = [160, 292]; // x, y
  const rightSentence = "ISA product license v1.4";
  pdf.setFontSize(10);
  pdf.setTextColor(102, 178, 255); // light blue
  pdf.text(rightSentence, ...rightSentCoords);
  pdf.setLineWidth(0.1);
  pdf.setDrawColor(102, 178, 255); // light blue
  pdf.line(160, 293, 198, 293); // startX, startY, endX, endY

  // Add title
  const titleCoords = titleInfo[titleNum].coordinates;
  const titleSentence = titleInfo[titleNum].title;
  pdf.setFontSize(17);
  pdf.setTextColor(0, 153, 0); // green
  pdf.setFontType("bold");
  pdf.text(titleSentence, ...titleCoords);
}

/**
 * Creates the Introductory Page for the PDF
 *
 * @param {Object} pdf PDF Object
 */
function addIntroductoryPage(pdf) {
  

  addPageTemplate(pdf, 1);
  
  // Add sentence1
  const sentence1 = "DG DIGIT";
  const sentence1Coords = [90, 60];
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontType("bold");
  pdf.text(sentence1, ...sentence1Coords);

  // Add sentence2
  const sentence2 = "Unit.D2";
  const sentence2Coords = [93, 70];
  pdf.text(sentence2, ...sentence2Coords);

  // Add sentence3
  const sentence3 = "eGovERA © portal";
  const sentence3Coords = [52, 100];
  pdf.setFontSize(35);
  pdf.setTextColor(51, 153, 255); // blue
  pdf.text(sentence3, ...sentence3Coords);

  // Add sentence4
  const sentence4 = "Decision support section";
  const sentence4Coords = [49, 130];
  pdf.setTextColor(0, 153, 0); // light green
  pdf.setFontSize(27);
  pdf.text(sentence4, ...sentence4Coords);

  // Add sentence5
  const sentence5 = "PDF export results";
  const sentence5Coords = [65, 145];
  pdf.text(sentence5, ...sentence5Coords);

  // Add user's information
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontSize(12);
  pdf.setFontType("bold");
  pdf.text("User name and surname:", 10, 250);
  pdf.text("Organisation:", 10, 258);
  pdf.text("Country:", 10, 266);
  pdf.text("Contact E-mail:", 10, 274);
  pdf.setFontType("normal");


  pdf.text(fileContent.fullName, 62, 250);
  pdf.text(fileContent.organisation, 39, 258);
  pdf.text(fileContent.country, 29, 266);
  pdf.text(fileContent.email, 43, 274);
  
}

// Start the loading functionality for the PDF Download button
function startLoader(textId, buttonId) {
  document
    .querySelector(`#${textId}`)
    .classList.add("download-btn-text-hidden");
  document.querySelector(`#${buttonId}`).classList.add("button-loader");
}

// Stop the loading functionality for the PDF Download button
function stopLoader(textId, buttonId) {
  document
    .querySelector(`#${textId}`)
    .classList.remove("download-btn-text-hidden");
  document.querySelector(`#${buttonId}`).classList.remove("button-loader");
}

// When the pdf download button is clicked

// const pdfButton = document.getElementById("pdfButton");

document.getElementById("pdfButtonTxt").addEventListener("click", createPDF);

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
    fileContent = json.contactData;
   
  };
  reader.readAsText(file);
  this.parentElement.className = "";
  this.parentElement.classList.add("d-none");
});


/**
 * Structure the PDF
 */


function createPDF() {
  // Create the PDF Object
  var pdfName = "decision-support.pdf";
  var pdf = new jsPDF();

  

  startLoader("pdfButtonTxt", "pdfButton");

  // Add to the PDF Object the Portfolio Management Table and Graph

  html2canvas(document.querySelector("[aria-label='A chart']")).then((canvas) => {
    if (!(canvas.height === 0) && !(canvas.width === 0)) {

      addIntroductoryPage(pdf);
      // Add the Graph of the Portofolio Management Section
      pdf.addPage();
      addPageTemplate(pdf,2)
      addExplanatoryText(pdf, 15, 55, 1);
    //   addExplanatoryText(pdf, 15, 160, 2);
      let img = canvas.toDataURL("image/url");
      pdf.addImage(img, "png", 95, 30, 105, 120);

      // Add the Table of the Portofolio Management Section
      var titles = [
        ["ID"],
        ["Policy Domain"],
        ["Digital Business Capability"],
        ["National Digital Strategy Fit"],
        ["Target Prospective Ability to support the dBusCap"],
        ["Estimated budget (in millions EUR)"],
        ["Expected Public Value"],
        ["Overall ability to support the dBusCap"],
        ["View Name"],
        ["Ability to support the dBusCap per view"],
      ];

      // If dBusCap selected
      
  //VARIABLES Y DATOS RELACIONADAS CON LAS TABLAS.
    
      let currentBcList;
    //   if (selectedValue) {
    //     currentBcList = { [selectedValue]: bcList[selectedValue] };
    //   } else {
    //     currentBcList = bcList;
    //   }


      let data = [];
      let count = 0;

      // Populate the rows of the tabl
      for (let key in currentBcList) {
        for (let viewKey in currentBcList[key]["views"]) {
          let row = [
            currentBcList[key]["views"][viewKey]["name"],
            currentBcList[key]["views"][viewKey]["avgAbility"],
          ];
          if (count % 5 === 0) {
            row.unshift(
              {
                rowSpan: 5,
                content: currentBcList[key]["id"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["policy"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["name"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["prospectiveAbility"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["priority"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["budget"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["expRandom"],
                styles: { valign: "middle", halign: "center" },
              },
              {
                rowSpan: 5,
                content: currentBcList[key]["avgAbility"],
                styles: { valign: "middle", halign: "center" },
              }
            );
          }
          data.push(row);
          count++;
        }
      }
  
    //   pdf.autoTable(titles, data, {
    //     columnStyles: {
    //       0: { cellWidth: 17 },
    //       1: { cellWidth: 16 },
    //       2: { cellWidth: 16 },
    //       3: { cellWidth: 16 },
    //       4: { cellWidth: 18 },
    //       5: { cellWidth: 18 },
    //       6: { cellWidth: 19 },
    //       7: { cellWidth: 20 },
    //       8: { cellWidth: 25 },
    //       9: { columnWidth: 14 },
    //     },
    //     theme: "grid",
    //     headStyles: {
    //       fillColor: [8, 161, 88],
    //       fontSize: 7,
    //       halign: "center",
    //       valign: "middle",
    //     },
    //     margin: { right: 20 },
    //     startY: 200,
    //     margin: { top: 30 },
    //     didDrawPage: function () {
    //       pdf.addPage();
    //       addPageTemplate(pdf, 3);
    //     },
    //   });

      // Add the Information for the first section of the Digital Transformation Roadmap
      html2canvas(document.querySelector("#dps-network-info")).then(
        (canvas) => {
          if (!(canvas.height === 0) && !(canvas.width === 0)) {
            pdf.addPage(5);
            addPageTemplate(pdf, 3);
            addExplanatoryText(pdf, 15, 35, 3);
            addExplanatoryText(pdf, 15, 93, 4);

            var titles1 = [["Selected Digital Business Capability"]];
            var titles2 = [["Table of Digital Public Services in scope"]];
            var data1 = [
              [
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[0]
                  .textContent.split(":")[0],
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[0]
                  .textContent.split(":")[1],
              ],
              [
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[1]
                  .textContent.split(":")[0],
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[1]
                  .textContent.split(":")[1],
              ],
              [
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[2]
                  .textContent.split(":")[0],
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[2]
                  .textContent.split(":")[1],
              ],
              [
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[3]
                  .textContent.split(":")[0],
                document
                  .getElementById("dps-network-bc-info")
                  .getElementsByTagName("p")[3]
                  .textContent.split(":")[1],
              ],
            ];
            var data2 = [];
            let liItemsArr = [];
            var liItems = document
              .getElementById("dps-select-info")
              .getElementsByTagName("li");
            for (let i = 0; i < liItems.length; i++) {
              if (clickedDPSs.length !== 0) {
                let id = liItems[i].textContent.split("-")[0].trim();
                for (let j = 0; j < clickedDPSs.length; j++) {
                  if (id === clickedDPSs[j]) {
                    liItemsArr.push(liItems[i].textContent);
                  }
                }
              } else {
                liItemsArr.push(liItems[i].textContent);
              }
            }

            // Create rows of three liItems
            let num = 0;
            for (let i = 0; i < Math.floor(liItemsArr.length / 3) + 1; i++) {
              let currRow = [];
              for (let j = 0; j < 3; j++) {
                if (num < liItemsArr.length) {
                  currRow.push(liItemsArr[num]);
                }
                num += 1;
              }
              if (currRow.length > 0) {
                data2.push(currRow);
              }
            }

            pdf.autoTable({
              startY: 42,
              head: [
                [
                  {
                    content: titles1,
                    colSpan: 2,
                    styles: { halign: "center", fillColor: [8, 161, 88] },
                  },
                ],
              ],
              body: data1,
              theme: "grid",
              talbeWidth: 900,
            });

            pdf.autoTable({
              startY: 105,
              head: [
                [
                  {
                    content: titles2,
                    colSpan: 3,
                    styles: { halign: "center", fillColor: [8, 161, 88] },
                  },
                ],
              ],
              body: data2,
              theme: "grid",
            });

            // Add the Graph for the first section of the Digital Transformation Roadmap
            html2canvas(document.querySelector("#dps-network-div")).then(
              (canvas) => {
                if (!(canvas.height === 0) && !(canvas.width === 0)) {
                  // set the space between the table and the graph
                  let decreasedSpace = 0;
                  switch (data2.length) {
                    case 1:
                      decreasedSpace = 45;
                      break;
                    case 2:
                      decreasedSpace = 35;
                      break;
                    case 3:
                      decreasedSpace = 24;
                      break;
                    case 4:
                      decreasedSpace = 11;
                      break;
                    case 5:
                      decreasedSpace = 0;
                      break;
                  }
                  let img = canvas.toDataURL("image/url");
                  let imgProps = pdf.getImageProperties(img);
                  let pdfWidth = pdf.internal.pageSize.getWidth();
                  let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                  pdf.addImage(
                    img,
                    "png",
                    14,
                    180 - decreasedSpace,
                    pdfWidth - 24,
                    pdfHeight
                  );

                  const graphTitle1 =
                    "Graphical representation of the Digital Public services in scope";
                  pdf.autoTable({
                    startY: 174 - decreasedSpace,
                    head: [
                      [
                        {
                          content: graphTitle1,
                          styles: { halign: "center", fillColor: [8, 161, 88] },
                        },
                      ],
                    ],
                    margin: { right: 10 },
                  });

                  // Add the Information for the second section of the Digital Transformation Roadmap
                  html2canvas(document.querySelector("#network_control")).then(
                    (canvas) => {
                      if (!(canvas.height === 0) && !(canvas.width === 0)) {
                        pdf.addPage();
                        addPageTemplate(pdf, 3);
                        addExplanatoryText(pdf, 15, 35, 5);

                        let title = [
                          [
                            "Implementation orientation for the digital transformation",
                          ],
                        ];
                        let data = [
                          [
                            "Legal Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to address and implement legal requirements",
                          ],
                          [
                            "Organizational/Governance Orientation: a member state has a governance orientation when its first priority, in the digital public service design, is to address the possible channels for the public service delivery, and the definition of Governance model",
                          ],
                          [
                            "Semantic/Intergration Orientation: a member state has a semantic/intergration orientation when its first priority, in the digital public service design, is to address the possible source of data (e.g. base registry), how data will be exchanged and to define guidelines and agreements for the sharing data",
                          ],
                          [
                            "Technical Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to reuse/share software components (e.g. registry services), to address exchanging capabilities of data (e.g. interfaces) and to define technical interoperability agreements",
                          ],
                        ];

                        pdf.autoTable({
                          startY: 160,
                          head: [
                            [
                              {
                                content: title,
                                styles: {
                                  halign: "center",
                                  fillColor: [8, 161, 88],
                                },
                                fontStyle: "bold",
                              },
                            ],
                          ],
                          body: data,
                          theme: "grid",
                        });

                        // Add the Graph for the second section of the Digital Transformation Roadmap
                        html2canvas(
                          document.querySelector("#network_div")
                        ).then((canvas) => {
                          if (!(canvas.height === 0) && !(canvas.width === 0)) {
                            let img = canvas.toDataURL("image/url");
                            let imgProps = pdf.getImageProperties(img);
                            let pdfWidth = pdf.internal.pageSize.getWidth();
                            let pdfHeight =
                              (imgProps.height * pdfWidth) / imgProps.width;
                            pdf.addImage(
                              img,
                              "png",
                              14,
                              51,
                              pdfWidth - 24,
                              pdfHeight
                            );

                            // Add the title
                            let graphTitle2 =
                              "Steps of the Digital Transformation Roadmap";
                            pdf.autoTable({
                              startY: 48,
                              head: [
                                [
                                  {
                                    content: graphTitle2,
                                    styles: {
                                      halign: "center",
                                      fillColor: [8, 161, 88],
                                    },
                                  },
                                ],
                              ],
                              margin: { right: 10 },
                            });

                            // Add the Information for the third section of the Digital Transformation Roadmap
                            html2canvas(
                              document.querySelector("#graph3_info")
                            ).then((canvas) => {
                              if (
                                !(canvas.height === 0) &&
                                !(canvas.width === 0)
                              ) {
                                pdf.addPage();
                                addPageTemplate(pdf, 3);
                                addExplanatoryText(pdf, 15, 35, 6);
                                addExplanatoryText(pdf, 15, 90, 7);
                                var titles1 = [["Digital Business Capability"]];
                                var data1 = [
                                  [
                                    document
                                      .getElementById("dps-network-bc-info")
                                      .getElementsByTagName("p")[0]
                                      .textContent.split(":")[0],
                                    document
                                      .getElementById("dps-network-bc-info")
                                      .getElementsByTagName("p")[0]
                                      .textContent.split(":")[1],
                                  ],
                                  [
                                    document
                                      .getElementById("dps-network-bc-info")
                                      .getElementsByTagName("p")[1]
                                      .textContent.split(":")[0] + " domain",
                                    document
                                      .getElementById("dps-network-bc-info")
                                      .getElementsByTagName("p")[1]
                                      .textContent.split(":")[1],
                                  ],
                                  [
                                    document
                                      .getElementById("dps-network-bc-info")
                                      .getElementsByTagName("p")[2]
                                      .textContent.split(":")[0],
                                    document
                                      .getElementById("dps-network-bc-info")
                                      .getElementsByTagName("p")[2]
                                      .textContent.split(":")[1],
                                  ],
                                  [
                                    "Estimated Budget (in millions EUR)",
                                    `${maxBudget}`,
                                  ],
                                ];

                                pdf.autoTable({
                                  startY: 40,
                                  head: [
                                    [
                                      {
                                        content: titles1,
                                        colSpan: 2,
                                        styles: {
                                          halign: "center",
                                          fillColor: [8, 161, 88],
                                        },
                                      },
                                    ],
                                  ],
                                  body: data1,
                                  theme: "grid",
                                  talbeWidth: 900,
                                });
                              }
                              // Add the Graph for the third section of the Digital Transformation Roadmap
                              html2canvas(
                                document.querySelector("#network_div2")
                              ).then((canvas) => {
                                if (
                                  !(canvas.height === 0) &&
                                  !(canvas.width === 0)
                                ) {
                                  let img = canvas.toDataURL("image/url");
                                  let imgProps = pdf.getImageProperties(img);
                                  let pdfWidth =
                                    pdf.internal.pageSize.getWidth();
                                  let pdfHeight =
                                    (imgProps.height * pdfWidth) /
                                    imgProps.width;
                                  pdf.addImage(
                                    img,
                                    "png",
                                    14,
                                    132,
                                    pdfWidth - 24,
                                    pdfHeight
                                  );

                                  let graphTitle3 =
                                    "Functionalities supporting the Digital Business Capability";
                                  pdf.autoTable({
                                    startY: 125,
                                    head: [
                                      [
                                        {
                                          content: graphTitle3,
                                          styles: {
                                            halign: "center",
                                            fillColor: [8, 161, 88],
                                          },
                                        },
                                      ],
                                    ],
                                    margin: { right: 10 },
                                  });
                                }

                                // Add the Building Blocks Table
                                html2canvas(
                                  document.querySelector("#bb-div")
                                ).then((canvas) => {
                                  if (
                                    !(canvas.height === 0) &&
                                    !(canvas.width === 0)
                                  ) {
                                    pdf.addPage();
                                    addPageTemplate(pdf, 4);
                                    addExplanatoryText(pdf, 15, 35, 8);
									var titles = [
										["ID"],
										["View"],
										["Area"],
										["Architecture Building Block"],
										["Desciption"],
										["IDs' successors"],
										["Digital Public service"]
									];

                                    var data = [];								

									var bbTable = document.getElementById("bbTable").getElementsByTagName("tr");
									// for (var i = 1; i < bbTable.length; i++) {
									for (var i = 1; i < bbTable.length - 2; i++) {

										var children = bbTable[i].children;
										var row = [];
										for (var j = 0; j < children.length; j++) {
											row.push(children[j].innerText);
										}
										data.push(row);
									}
									console.log(data);

                                    pdf.autoTable(titles, data, {
                                      startY: 50,
                                      headStyles: { fillColor: [8, 161, 88] },
                                      rowPageBreak: "auto",
                                      bodyStyles: { valign: "top" },
                                      columnStyles: {
                                        // 0: { cellWidth: 15 },
                                        // 1: { cellWidth: 12 },
                                        // 2: { cellWidth: 20 },
                                        // 3: { cellWidth: 25 },
                                        // 4: { cellWidth: 60 },
                                        // 5: { cellWidth: 10 },
                                        // 6: { cellWidth: 20 },
                                        0: { cellWidth: 15 },
                                        1: { cellWidth: 15 },
                                        2: { cellWidth: 15 },
                                        3: { cellWidth: 25 },
                                        4: { cellWidth: 40 },
                                        5: { cellWidth: 15 },
                                        6: { cellWidth: 15 },
                                        // text: { cellWidth: "fixed" },
                                      },
                                      theme: "grid",
                                      margin: { top: 30 },
                                      didDrawPage: function () {
                                        addPageTemplate(pdf, 4);
                                      },
                                    });
                                    stopLoader("pdfButtonTxt", "pdfButton");
                                    pdf.save(pdfName);
                                  } else {
                                    stopLoader("pdfButtonTxt", "pdfButton");
                                    pdf.save(pdfName);
                                  }
                                });
                              });
                            });
                          } else {
                            stopLoader("pdfButtonTxt", "pdfButton");
                            pdf.save(pdfName);
                          }
                        });
                      } else {
                        stopLoader("pdfButtonTxt", "pdfButton");
                        pdf.save(pdfName);
                      }
                    }
                  );
                } else {
                  stopLoader("pdfButtonTxt", "pdfButton");
                  pdf.save(pdfName);
                }
              }
            );
          } else {
            stopLoader("pdfButtonTxt", "pdfButton");
            pdf.save(pdfName);
          }
        }
      );
    } else {
      stopLoader("pdfButtonTxt", "pdfButton");
      window.alert("Select a JSON file");
    }
  });
}

// ******************************
// PDF Creation Functionality END
// ******************************
