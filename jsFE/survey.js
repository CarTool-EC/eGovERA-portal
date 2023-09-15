import "regenerator-runtime/runtime";

import FILES from "./requestSurvey";

let converter = new showdown.Converter();
let resultsToSave = {};
let currentState = {};
let doLoadState = false;
let prospectiveAvgElements = [];
// let createAvgElementIdx = null;
let selectedNonApplicableReqIDs = [];
let nonApplicableReqs = [];
let checkboxes = {};
let overallAvgOptimal = 0;
let fullName;
let organisation;
let email;
let country;
let selectedBC = {};

const buttonTitles = [];

const pubValueTooltip = `It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the digital business capability. (*) default is the highest possible prospective ability`;

const budgetTooltip = `It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the digital business capability (to fulfill the GAP)`;

const perspectiveTool = `It measures the perspective ability to support a Digital Business Capability`;

const supportTooltip = `It measures the current ability to support the digital business capability`;

const abbTooltips = {
  Legal: `This view includes the ABBs related to the different legal acts, policies and strategies influencing or governing the digital public services`,
  Organisational: `This view includes the ABBs related to the Public Administration organisation, responsibilities and agreements to achieve mutually beneficial goals`,
  Semantic: `This view includes the ABBs related to format and meaning of exchanged data and information`,
  Technical: `This view covers the ABBs related to the applications and infrastructures systems and services`,
  "Technical-infrastructure": `This view includes all the ABB related to the infrastructures systems and services`,
  "Technical-application": `This view includes all the ABB related to the applications systems and services`,
};

const $surveyLoadingModal = $("#survey-loading-modal");

/**
 * This function takes an array of objects and groups each object
 * For ex [{id:1, item: 2}, {id:1, item2: 3}] and key = 'id' ==> {1: {id:1, item: 2}, {id:1, item2: 3}}
 * @param {Array} obj
 * @param {String} key
 * @param {Boolean} containSpaces
 * @returns {Object}
 */
function groupBy(obj, key, containSpaces) {
  let spaces = containSpaces || true;
  if (spaces) {
    return obj.reduce(function (prevObj, current) {
      (prevObj[current[key]] = prevObj[current[key]] || []).push(current);
      return prevObj;
    }, {});
  }
  return obj.reduce(function (prevObj, current) {
    const tempKey = current[key].split(" ")[0];
    (prevObj[tempKey] = prevObj[tempKey] || []).push(current);
    return prevObj;
  }, {});
}

const changeActiveStateAtButtonsTitles = (id, isActive) => {
  for (let index = 0; index < buttonTitles.length; index++) {
    const buttonsTitles = buttonTitles[index];
    const test = buttonsTitles.filter((obj) => obj.id === id);
    if (test.length > 0) {
      test[0].active = isActive;
      break;
    }
  }
};
/**
 * This function takes a 3 numbers and generates an array with numbers in this range
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
function range(start, end, step) {
  let s = start || 0;
  let stp = step || 1;
  const arr = [];
  for (let i = s; i <= end; i += stp) {
    arr.push(i);
  }
  return arr;
}

/**
 * This function takes a string and make the first letter UpperCase.
 * @param {String} s
 */
function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function animate(animitionType, duration) {
  if (!duration) duration = 1000;
  var surveyContainer = document.getElementById("surveyContainer");
  $(surveyContainer).velocity(animitionType, { duration: duration });
}
animate("slideDown", 1000);

var doAnimantion = true;

const createChecbox = (policy) => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  div.appendChild(input);
  div.appendChild(label);
  const labelText = capitalize(policy.toLowerCase());

  div.className = "form-check form-check-inline";
  input.className = "form-check-input";
  label.className = "form-check-label";

  input.setAttribute("type", "checkbox");
  input.setAttribute("checked", "checked");
  
  input.id = `${policy.toLowerCase().split(" ").join("-")}-checkbox`;
  labelText === "Business agnostic" && input.setAttribute("disabled", "true");

  if (labelText === "Business agnostic") {
    input.setAttribute("disabled", "true");
    input.setAttribute("checked", "checked");
  } else {
    input.checked = false;
  }

  label.innerText =
    labelText === "Business agnostic" ? `${labelText} (required)` : labelText;

  return div;
};

const createPolicyCheckboxes = (policies) => {
  const parent = document.querySelector(".form-check-group");

  policies.forEach((policy) => {
    const div = createChecbox(policy);
    parent.appendChild(div);
  });
};

const fetchPolicies = async () => {
  try {
    let resp = await fetch("/api/backoffice/get-policies");
    resp = await resp.json();
    createPolicyCheckboxes(resp);
  } catch (error) {
    console.error(error);
  }
};
fetchPolicies();

function updateButtonsClickAbility(currentActiveIdx) {
  let buttons = document.querySelectorAll("#pageSelector button");
  for (let i = 0; i < buttons.length; i++) {
    if (i < currentActiveIdx) {
      buttons[i].disabled = false;
    } else {
      buttons[i].disabled = false;
    }
  }
}


function addButtonsInNavigation() {
  let footerContent = document.querySelector(".panel-footer");
  let newButtons = document.getElementById("buttons-in-top");
  if (footerContent === null) return;
  let elements = footerContent.childNodes;
  newButtons.innerHTML = "";

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i].cloneNode(true);
    element.addEventListener("click", function () {
      const elementType = elements[i].nodeName;
      if (elementType === "FONT") {
        elements[i].querySelector("input,button").click();
        return;
      }
      elements[i].click();
    });
    newButtons.appendChild(element);
  }

  const buttonsObserver = new MutationObserver(function (mutations) {
    addButtonsInNavigation();
  });
  const observerConfiguration = {
    attributes: true,
    childList: true,
    characterData: true,
  };
  buttonsObserver.observe(footerContent, observerConfiguration);
}







/**
 * Create Checkboxe for skip functionality
 */
const checkBoxForBCv2 = (checked = false) => {
  const checkbox = document.createElement("input");
  checkbox.className = "skip-checkbox";
  checkbox.checked = checked;

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("custom-checked", checked);

  return checkbox;
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const getGeneratedVisibleRow = (page, idx) => {
  return page.elements[0].generatedVisibleRows[idx];
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const changeRequiredStateAtCells = (visibleRow, reqState) => {
  if (null != visibleRow && undefined != visibleRow)
  {
    const { cells } = visibleRow;
    for (let idx = 0; idx < cells.length; idx++) {
      cells[idx].question.isRequired = reqState;
    }
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */

const removeRequiredFromBBS = (page, state) => {
  const { elements } = page;
  for (let idx = 0; idx < elements.length; idx++) {
    const { columns } = elements[idx];
    for (let cIdx = 0; cIdx < columns.length; cIdx++) {
      columns[cIdx].isRequired = state;
    }
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const toggleAllElementsState = (page, state) => {
  removeRequiredFromBBS(page, state);
  const { elements } = page;
  for (let i = 0; i < elements.length; i++) elements[i].isRequired = state;
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const isAllBcSelected = (body) => {
  const testA = body.querySelectorAll(".skip-checkbox");
  const testB = body.querySelectorAll(".skip-checkbox[custom-checked=true]");
  return testA.length === testB.length;
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const removeContent = (row) => {
  const { cells } = row;
  for (let idx = 0; idx < cells.length; idx++) {
    cells[idx].value = "";
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const toggleVisibility = (page, state) => {
  const { elements } = page;
  for (let idx = 0; idx < elements.length - 1; idx++) {
    elements[idx].visible = state;
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
const determineParentClass = (parentElement, checked) => {
  if (checked) {
    parentElement.classList.remove("table-parent-event");
  } else {
    parentElement.classList.add("table-parent-event");
  }
};

const cleanGeneratedQuestionFromSpanTag = (question) => {
  return question.replace('<span style="display:none">', "").replace("</span>", "");
}

const getIDFromGeneratedQuestion = (question) => {
  question = cleanGeneratedQuestionFromSpanTag(question);
  return question.split(")")[0];
};

const findGeneratedVisibleRowIndex = (elements, id) => {
  const { generatedVisibleRows } = elements;

  let index = -1;

  generatedVisibleRows.forEach((row, idx) => {
    const { name } = row;
    const rowId = getIDFromGeneratedQuestion(name);
    if (rowId === id) {
      index = idx;
      return;
    }
  });

  return index;
};

function isValidBudget(value) {
  let re = /^(\d{0,}\.\d{0,2}|\d{0,}|\.\d{0,2})$/;
  if (!value) return;

  let test = re.test(value);
  if (!test) return "Please provide the budget in the right form (e.x. 10.50)";
}

/**
 * Create Checkboxes for all the dBusCaps with all functionality
 */
const addCheckBoxInBCQuestion = (
  survey,
  { htmlElement: parent, page },
  isFirstPage
) => {
  let bcTableyTag = parent.querySelectorAll(".sv_row table");

  let rowIndexV1 = bcTableyTag.length === 1 ? 1 : bcTableyTag.length;
  bcTableyTag = bcTableyTag[rowIndexV1 - 1];

  let bcBodyTag = bcTableyTag.querySelector("tbody");
  let bcHeadTag = bcTableyTag.querySelector("thead tr");
  const th = document.createElement("th");
  th.className = isFirstPage ? "" : "d-none";
  const span = document.createElement("span");
  span.innerHTML = `Selected 
  <a
  target="_blank"
  href="https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalBusinessCapability "
  title="Digital Capabilities are the key skills and capabilities a company or a Government requires to transform itself into a sustainable and successful business by considering digital technology as the enabling component">digital
  business capabilities</a>`;

  const tooltipSpan = document.createElement("span");
  tooltipSpan.setAttribute("data-toggle", "tooltip");
  tooltipSpan.setAttribute("data-html", "true");
  tooltipSpan.setAttribute(
    "title",
    "Unchecking this button, the related digital business capability will not be assessed "
  );
  tooltipSpan.className = "pl-1";
  const icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  span.appendChild(tooltipSpan);

  th.appendChild(span);

  bcHeadTag.insertBefore(th, bcHeadTag.firstElementChild);

  let trs = bcBodyTag.querySelectorAll("tr");
  let len = trs.length;

  for (let idx = 0; idx < len; idx++) {
    const tr = trs[idx];
    const td = document.createElement("td");
    td.className = isFirstPage ? "" : "d-none";
    tr.insertBefore(td, tr.firstElementChild);
    const $tr = $(tr);

    const id = getIDFromGeneratedQuestion(
      $tr.children().eq(1).find("span").text()
    );

    if (!selectedBC[id]) {
      $tr.addClass("table-parent-event");
      const a = findGeneratedVisibleRowIndex(page.elements[0]);
      if (a !== -1) {
        removeContent(page.elements[0].generatedVisibleRows[a]);
      }
    } else {
      $tr.removeClass("table-parent-event");
    }

    const checkbox = checkBoxForBCv2(selectedBC[id]);

    td.appendChild(checkbox);

    changeRequiredStateAtCells(
      getGeneratedVisibleRow(page, idx),
      checkbox.checked
    );
  }

  //Not sure why the if below doesn't work. This line is a workaround for now


  if (!isFirstPage) {
    if (isAllBcSelected(bcBodyTag)) {
      toggleAllElementsState(page, true);
      toggleVisibility(page, true);
    } else {
      toggleAllElementsState(page, false);
      toggleVisibility(page, true);
    }
  }

  bcBodyTag.addEventListener("click", () => {
    const element = event.target;
    if (!(element.nodeName === "INPUT" && element.type === "checkbox")) return;
    const currentRowElement = element.parentElement.parentElement;
    const rowIndex = currentRowElement.rowIndex;
    const $tr = $(currentRowElement);
    const id = getIDFromGeneratedQuestion(
      $tr.children().eq(1).find("span").text()
    );

    removeContent(getGeneratedVisibleRow(page, rowIndex - 1));
    changeRequiredStateAtCells(
      getGeneratedVisibleRow(page, rowIndex - 1),
      element.checked
    );

    if (element.checked) {
      $(`[dbuscap-id=${id}]`).removeClass("d-none");
    } else {
      $(`[dbuscap-id=${id}]`).addClass("d-none");
    }

    page.rows[rowIndexV1 - 1].elements[0].isRequired = element.checked;

    selectedBC = { ...selectedBC, [id]: element.checked };

    changeActiveStateAtButtonsTitles(id, element.checked);

    element.setAttribute("custom-checked", element.checked);

    setVisibilitySurveyPageBasedDBCID(survey, id, element.checked);

    determineParentClass(currentRowElement, element.checked);
    updateProgressBar();
    addButtonsInNavigation();
  });
};

const setVisibilitySurveyPageBasedDBCID = (survey, id, state) => {
  const { pages } = survey;

  for (let idx = 1; idx < pages.length; idx++) {
    const { questions } = pages[idx];
    const dBusCapQuestion = questions[questions.length - 1];
    const elementRow = dBusCapQuestion.rows[0];

    if (elementRow.text.startsWith(`${id})`)) {
      pages[idx].visible = state;
      return;
    }
  }
};

/**
 * Calculate the average ability for the abbs are selected
 */
const totalCalcAbbAvg = () => {
  const array = $(
    ".sv_row:not(:last-child) .btn.btn-default.btn-secondary.active:not(.hide)"
  )
    .map(function (index, element) {
      return +$(this).find("input").val();
    })
    .get();
  const sum = array.reduce(function (sum, num) {
    return (sum += num);
  }, 0);
  const avg = array.length > 0 ? sum / array.length : 0;
  return avg;
};

/**
 * Create the element in the survey that will display the average of the abbs that user selected
 */
const totalAvgAbbElement = (bcName) => {
  let lastRow = $(".sv_row:last-child");

  //const avg = totalCalcAbbAvg();

  // let newElement = $(`
  // <div class="custom-row pt-2 pb-4 px-3" hidden>
  //   <p class="custom-avg-p">
  //   The overall assessed ability to support the digital business capability "${bcName.title
  //   }" is:
  //     <input class="custom-avg-input" id="total-avg-input" type=text value="${avg.toFixed(2)}" disabled />
  //   out of 5
  //   </p>
  // </div>
  // <div class="custom-row pt-2 pb-4 px-3">
  //   <p class="custom-avg-p">
  //     Therefore the gap between the Target Prospective Average Ability and the Overall Assessed Ability to support the digital business capability is:
  //     <input id="overall-diff-target-ability" class="custom-avg-input" id="total-avg-input" type=text value="${avg.toFixed(2)}" disabled /> out of 5
  //   </p>
  // </div>
  // `);
  //lastRow.before(newElement);
 

  $(".sv_row:not(:last-child) .btn.btn-default.btn-secondary").on(
    "click",
    "input",
    function () {
      $(this).parent().addClass("active");
      $(this).parent().prevAll().removeClass("active");
      $(this).parent().nextAll().removeClass("active");
      const avg = totalCalcAbbAvg();
      $("#total-avg-input").val(avg.toFixed(2));
      updateTargetOverallAccessDiff();
    }
  );
};

// const calcAvgForView = (idx) => {
//   let $activeLabels = $(
//     `.sv_row:nth-of-type(${idx + 1}) .btn.btn-default.btn-secondary.active:not(.hide)`
//   );
//   let values = $activeLabels
//     .map(function () {
//       return +$(this).find("input").val();
//     })
//     .get();

//   let avg = values.reduce((sum, currVal) => (sum += currVal), 0);
//   let length = values.length;

//   if (!length) return 0;

//   return avg / length;
// };

const calcAvgForView = (idx) => {
  const $activeLabels = $(`.sv_row:nth-of-type(${idx}) .rating-button.selected`);
  let sum = 0;
  let length = $activeLabels.length;

  $activeLabels.each(function () {
    sum += parseInt($(this).val(), 10);
  });

  if (length === 0) return 0;

  return sum / length;
};

const createAvgElement = (bcName, view, idx) => {
  let avg = calcAvgForView(idx);
  let newElement = $(`
  <div class="custom-row pt-2 pb-4 px-3">
     <p class="custom-avg-p">
    The overall assessed ability to support the digital business capability "${bcName}" ${view} requirements is:
      <input class="custom-avg-input view-avg" id="custom-avg-input-${idx}" type=text value="${avg.toFixed(
    2
  )}" disabled />
    out of 5
    </p> 
  </div>
  `);

  //<input type="range" name="prospective-avg-input" id="prospective-avg-input-${idx}" min="1" max="5" value="0" required>

  // <form>
  //         <label class="radio-inline">
  //           <input type="radio" name="optradio" checked>Option 1
  //         </label>
  //         <label class="radio-inline">
  //           <input type="radio" name="optradio">Option 2
  //         </label>
  //         <label class="radio-inline">
  //           <input type="radio" name="optradio">Option 3
  //         </label>
  //       </form>


  // Este codigo pertenece a la const newElement2 de debajo, pero por motivos de front se ha sacado para comentarlo.

  const targetElement = $(".sv_row");
  const newElement2 = $(`
    <div>
      <div>
        <div  id="prospective-avg-input-${idx}" required></div>
      </div>
      <div id="ability-difference-${idx}">  
      </div>
      <div class="custom-row pt-2 pb-4 px-3" id="ability-difference-${idx}">
      </div>
    </div>
    <h2><b> ${view} View</b></h2>
    <hr style="height:2px;background-color:black;">
  `);

  let latestActualAvg = 0;
  let latestOptimalAvg = 0;
  prospectiveAvgElements = document.getElementsByName("prospective-avg-input");

  // Updates the value that shows the difference between the Target Prospectice (Optimal)
  // and the OvelAll assessed (Actual) Avg Ability
  function updateDiff() {
    document.getElementById(`ability-difference-value-${idx}`).value = (latestActualAvg - latestOptimalAvg).toFixed(2);
  }

  // Calculate the Overall Average
  function updateOverallAvgOptimal() {
    let sum = 0;
    let len = prospectiveAvgElements.length;
    for (let i = 0; i < len; i++) {
      sum += Number(prospectiveAvgElements[i].value);
    }
    overallAvgOptimal = (sum / len).toFixed(0);
    return overallAvgOptimal;
  }

  $(".sv_row").eq(idx).append(newElement);
  //$(".sv_row").eq(idx).append(newElement2);

  targetElement.eq(idx).prepend(newElement2);


  $(".sv_row")
    .eq(idx)
    .on("click", "*", function (event) {
      const $labels = $(event.target).parents(".btn.btn-default.btn-secondary");
      if (!$labels.length) return;
      $labels.addClass("active");
      $labels.prevAll().removeClass("active");
      $labels.nextAll().removeClass("active");
      const avg = calcAvgForView(idx);
      $(`#custom-avg-input-${idx}`).val(avg.toFixed(2));

      // Get the actual avg from the values of the requirements
      latestActualAvg = $(`#custom-avg-input-${idx}`)[0].value;
      updateDiff();
    });

  // Get the optimal avg that the user provides
  document.getElementById(`prospective-avg-input-${idx}`).addEventListener("click", function () {
    latestOptimalAvg = document.getElementById(`prospective-avg-input-${idx}`).value;
    // Update the difference value between the user's optimal average and the actual average
    updateDiff();
    // Update the Target Prospective Average Ability rating value
    const lastTable = Array.from(document.querySelectorAll('table')).slice(-1)[0];
    const tbodyElement = lastTable.querySelector('tbody');
    const trElement = tbodyElement.querySelector('tr');
    const lastTdElement = Array.from(trElement.querySelectorAll('td')).slice(-1)[0];
    const divElement = lastTdElement.querySelector('div');
    // Make the Target Prospective Average Ability rating non clickable for the user
    divElement.className = ' disable-div';
    // Automatically click the Average value for Target Prospective
    divElement.getElementsByClassName('btn-group')[0].querySelectorAll('label')[updateOverallAvgOptimal() - 1].click();

    updateTargetOverallAccessDiff();
  });
};

/***
 * Updates the value of the difference between Target Prospective Average Ability 
 * and Overall Access Ability to Support the DBC
 */
function updateTargetOverallAccessDiff() {
  // Get overall access ability value
  const overallAccessAblity = $("#total-avg-input").val();
  // Get the target prospective value
  const targetProspectiveValue = overallAvgOptimal;
  // Update the difference value
  const newValue = overallAccessAblity - targetProspectiveValue;
  $("#overall-diff-target-ability").val(newValue.toFixed(2));
}

const createAvgElements = (bcName, views) => {
  views.forEach((view, idx) => {
    createAvgElement(bcName.title, view, idx);
  });
};

/**
 * @param {Array} surveys
 * @param {Number} index
 */
function surveyRelated(surveys, index, go2Top) {
  let idx = index || 0;
  let animateToTop = go2Top || false;

  if (animateToTop) {
    let interval = setInterval(function () {
      let button = document.querySelector(".scroll-to-top");
      if (button) {
        button.click();
        clearInterval(interval);
      }
    }, 1);
  }

  let title = "eGovera";
  let pages = [{
    name: "Electronic identification",
    elements: [{
        name: "legal",
        title: "Legal View",
        type: "panel",
        elements: [
            {
                name: "eIdentification1",
                title: "eIdentification",
                type: "radiogroup",
                colCount: 4,
                choices: [
                    { value: 5, text: "5" },
                    { value: 4, text: "4" },
                    { value: 3, text: "3" },
                    { value: 2, text: "2" },
                    { value: 1, text: "1" }
                ]
            }
        ]
    }]
}];

  var surveyJSON = { 
    title: title,
    pages: pages,
    showTitle: false
    };

  const isLast = idx === surveys.length - 1;

  const onCompleteFunc = isLast ? completeLastSurvey : completeNonLastSurvey;

  Survey.JsonObject.metaData.addProperty("questionbase", "tooltip");
  Survey.StylesManager.applyTheme("bootstrap");
  var survey = new Survey.Model(surveyJSON);

  survey.completeText = isLast ? "Complete" : "Next Survey";

  survey.onCompleting.add(onCompleteFunc);

  survey.showQuestionNumbers = "off";

  survey.onAfterRenderSurvey.add(function (sender) {
    const interval = setInterval(() => {
      const { isLoading } = survey;
      if (isLoading) return;
      clearInterval(interval);
      setTimeout(() => {
        $surveyLoadingModal.modal("hide");
      }, 500);
    }, 10);
  });

  let optionsAfterRenderPage = ""

  survey.onAfterRenderPage.add(function (sender, options) {
    optionsAfterRenderPage = options;
    updateNavigation(options.page.visibleIndex);

    updateButtonsClickAbility(options.page.visibleIndex);

    // Implement the pre populate functionality 
    const valueBtns = document.getElementsByClassName("btn btn-default btn-secondary");
    const requirements = document.getElementsByClassName("req");
    const questionsObj = {};
    const surveyDataObj = {};

    // populate the questionObj
    // {requirement ID: [valueBtn1,....], .....}

    /*Comentado temporalmente para el desarrollo-MG
    let pos = 0;
    for (let i = 0; i < requirements.length; i++) {
      const plainID = requirements[i].innerText.split("*")[0];
      questionsObj[plainID] = [];
        for (let j = 0; j < 5; j++) {
          questionsObj[plainID].push(valueBtns[pos]);
          pos += 1;
        } 
    } */

    for (const [view, valuesObj] of Object.entries(survey.data)) {
      for (let [id, ability] of Object.entries(valuesObj)) {
        id = getIDFromGeneratedQuestion(id).split(">")[2];
        ability = Object.values(ability)[0]
        if (id !== undefined) {
          surveyDataObj[id.split("-")[0].replace(" ", "")] = ability;
        }
      }
    }

    // Uncomment to autopopulate requirements
    // for (let i = 0; i < valueBtns.length;) {
    //   // populate random value
    //   // let rand = Math.floor(Math.random() * 5) + 1;
    //   // for(let j = 1; j <= 5; j++) {
    //   //   if((j + 1) % rand === 0) {
    //   //     valueBtns[i].click();
    //   //   }
    //   //   i += 1;
    //   // }
    //   // populate value 5
    //   if((i + 1) % 5 === 0) {
    //     valueBtns[i].click();
    //   }
    //   i += 1;
    // }

    // Populate requirement's value based on a previous value 
    for (const [id, labelArray] of Object.entries(questionsObj)) {
      console.log("id", id)
      console.log("labelArray", labelArray)
      console.log("surveyDataObj", surveyDataObj)
      console.log("questionObj", questionsObj)
      console.log("selectedNonApplicableReqIDs", selectedNonApplicableReqIDs)
      let hasActiveValue = false;
      for (let i = 0; i < labelArray.length; i++) {
        console.log("label Array value", labelArray[i])
        console.log("label Array value contains", labelArray[i].classList.contains('active'))
        if (labelArray[i].classList.contains('active')) {
          hasActiveValue = true;
        }
      }

      let nonApplicableBtnId = id.replace(" - ", "");
      nonApplicableBtnId = nonApplicableBtnId.replace(')"', "");
      id = id.split("-")[0].replace(" ", "");

      let found = false;
      for (let i = 0; i < selectedNonApplicableReqIDs.length; i++) {
        if (selectedNonApplicableReqIDs[i].includes(id)) {
          console.log("ASDF")
          found = true;
        }
      }

      // if the requirement has no previous value, initialize it with the most recent
      if (hasActiveValue === false || found) {

        // let nonApplicableBtnId = id.replace(" - ", "");
        // nonApplicableBtnId = nonApplicableBtnId.replace(')"', "");
        // id = id.split("-")[0].replace(" ", "");
        if (id in surveyDataObj) {
          // let found = false;
          // for (let i=0; i < selectedNonApplicableReqIDs.length; i++){
          //   if(selectedNonApplicableReqIDs[i].includes(id)){
          //     console.log("ASDF")
          //     found = true;
          //   }
          // }
          if (surveyDataObj[id] === "NotApplicable" || found) {
            document.getElementById(nonApplicableBtnId).click();
            if (!selectedNonApplicableReqIDs.includes(nonApplicableBtnId)) {
              selectedNonApplicableReqIDs.push(nonApplicableBtnId);
            }
          } else {
            labelArray[surveyDataObj[id] - 1].click();
          }
        }
      }
    }

    let interval = setInterval(function () {
      let questions = $(".sv_row");

      if (!questions) {
        return;
      }
      clearInterval(interval);
      addButtonsInNavigation();
      $("#access-controls .spinner-border").addClass("d-none");
      if (questions.length > 1) {
        const views = options.page.elements
          .map((element) => element.fullTitle)
          .map((html) => html.match(/<b>([a-zA-Z ]+)<\/b>/))
          .filter(Boolean)
          .map((groups) => groups[1]);

        const activeButtonTitles = buttonTitles[idx].filter(
          (obj) => obj.active
        );

        createAvgElements(
          activeButtonTitles[options.page.visibleIndex - 1],
          views
        );

        //totalAvgAbbElement(activeButtonTitles[options.page.visibleIndex - 1]);
      }
      addCheckBoxInBCQuestion(survey, options, survey.currentPageNo === 0);
      updateProgressBar();
      $surveyLoadingModal.modal("hide");
      if (survey.currentPageNo !== 0) {
        if ($("#expand-error").length === 0) {
          const $message = createMessageForExpand();
          $("#surveyContainer form").prepend($message);
        }
      } else {
        if ($("#expand-error").length !== 0) {
          $("#expand-error").remove();
        }
        $("#dbcInstructions").modal("show");
      }
    }, 100);
  });

  survey.onMatrixCellValidate.add(function (sender, options) {
    if (options.columnName != "budget") return;
    const error = isValidBudget(options.value);
    options.error = error;
  });

  survey.onSettingQuestionErrors.add(function (sender, options) {
    if (options.errors.length === 0) return;
    try {
      const { name } = options.errors[0].errorOwner.textProcessor;
      if (!name) return;
      const questionID = getIDFromGeneratedQuestionForBB(name) + ")";
      const $questionSpan = $(`span:contains("${questionID}")`);
      const $parent = $questionSpan.parents(".sv_row");
      const $collapseButton = $parent.find("h5 button");

      if (!$collapseButton.hasClass("collapsed")) return;
      $collapseButton.click();
    } catch (e) {
      return;
    }
  });




  // survey.onValidatedErrorsOnCurrentPage.add(function (survey, options) {
  //   let pageHasErros =  options.errors.length !== 0;
  //   let windowHeight = $(window).height();
  //   if (!pageHasErros) return;
  
  //   const { questions } = options;
  //   const { questions: allQuestions } = survey.currentPage;
  
  //   allQuestions.forEach((question) => {
  //     const { id } = question;
  //     $(`#${id}-custom-alert`).remove();
  //   });
  
  //   questions.forEach((option) => {
  //     const $error = $("<div></div>")
  //       .addClass("alert alert-danger")
  //       .attr("id", `${option.id}-custom-alert`)
  //       .text("Please answer the question");
  
  //     $(`#${option.id}`).before($error);
  //   });
  
  //   $("#access-controls .spinner-border").addClass("d-none");
  //   $("html, body").animate(
  //     {
  //       scrollTop:
  //         $(".sv_qstn .has-error").first().offset().top - windowHeight / 2,
  //     },
  //     800
  //   );
  // });

  survey.onTextMarkdown.add(function (survey, options) {
    var str = converter.makeHtml(options.text);

    str = str.replace(/<p[^>]*>|<\/p>/g, "");

    options.html = str;
  });

  var myCss = {
    navigationButton: "btn btn-primary",
  };

  $("#surveyContainer").Survey({
    model: survey,
    onComplete: handleSurveyCompletion,
    css: myCss,
  });
  survey.onCurrentPageChanging.add(function (sender, options) {
    $('.sv_next_btn').hide();
    if (!doAnimantion) return;
    options.allowChanging = false;
    document.getElementById("pageSelector").classList.add("d-none");
    $("#access-controls .spinner-border ").removeClass("d-none");
    $surveyLoadingModal.modal({ backdrop: "static", keyboard: false });

    setTimeout(function () {
      doAnimantion = false;

      sender.currentPage = options.newCurrentPage;
      doAnimantion = true;

      document.getElementById("pageSelector").classList.remove("d-none");
    }, 500);
    animate("slideUp", 400);
  });
  survey.onCurrentPageChanged.add(function (sender) {
    $('.sv_next_btn').hide();
    animate("slideDown", 400);
    setTimeout(() => {
      updateProgressBar();
      $surveyLoadingModal.modal("hide");
    }, 400);
  });

  survey.onAfterRenderQuestion.add(function (sender, options) {
    if (sender.currentPageNo === 0) return;

    const $parent = $(options.htmlElement);
    const parentID = $parent.attr("id");
    const $titleDiv = $parent.find(">div:first-child h5");
    const $questionsDiv = $parent.find(">div:last-child");

    $questionsDiv.attr("id", parentID + "-question");
    $questionsDiv.addClass("collapse");

    const $button = $("<button></button>")
      .attr("data-toggle", "collapse")
      .attr("data-target", `#${parentID}-question`)
      .attr("aria-expanded", "false")
      .addClass("collapse-button collapsed");

    try {
      const label = $titleDiv.attr("aria-label");
      const category = label.split("<b>")[1].split("</b>")[0];
      //$(`#${parentID} table`).before(illustrativeExample(category));
    } catch (e) { }

    $titleDiv.prepend($button);
  });

  survey.onAfterRenderQuestionInput.add(function (sender, options) {
    if (sender.currentPageNo === 0) return;
    if (
      options.question.fullTitle !==
      '<span style="display: none;">Ability to support the dBusCap </span>'
    )
      return;
    const $text = $(
      "<div><b>Extent to which the requirement is met by the As-Is Digital Business Capability</b></div>"
    );
    let reqId = getIDFromGeneratedQuestionForBB(options.question.data.name).split(">")[2];
    // the - creates bug when used in id of html element button
    let abbId = reqId.split("-")[0].replace(" ", "");
    reqId = reqId.replace(" - ", "")
    const $applicable = $(
      `<span title="By selecting this requirement as 'not applicable' one, it will not be considered in the overall assessed ability to support the digital business capability">` +
      `<button class="non-applicable-button" id=${reqId}>Not Applicable Requirement</button></span>`
    );
    $(options.htmlElement).prepend($text);
    if (nonApplicableReqs.includes(abbId)) {
      $(options.htmlElement).append($applicable);;
    }

    // The functionality regarding the non applicable button
    document.getElementById(`${reqId}`)?.addEventListener('click', function () {
      // add or delete the reqId from the array
      if (selectedNonApplicableReqIDs.includes(reqId)) {
        // the user has unselected the non applicable button
        selectedNonApplicableReqIDs.splice(selectedNonApplicableReqIDs.indexOf(reqId), 1);
        // Unselect the value
        const labels = options.htmlElement.getElementsByTagName("div")[3].getElementsByTagName('label');
        for (let i = 0; i < labels.length; i++) {
          labels[i].classList.remove('hide')
          labels[i].classList.remove('active')
        }

      } else {
        // the user has selected the non applicable button
        selectedNonApplicableReqIDs.push(reqId);

        // Hide the selected requirement's value box
        const labels = options.htmlElement.getElementsByTagName("div")[3].getElementsByTagName('label');
        for (let i = 0; i < labels.length; i++) {
          labels[i].classList.add('hide')
          // In case the requirment has no selected value
          // assigned the value one in order to pass the error test
          if (i === 0) {
            labels[0].click();
          }
        }
      }

      document.getElementById(`${reqId}`).classList.toggle("non-applicable-activated");
      options.htmlElement.getElementsByTagName("div")[1].classList.toggle("hide")

      // Calculate the avg without the selected non applicable requirement
      let allViewsAvgInputs = document.getElementsByClassName('view-avg');
      for (let i = 0; i < allViewsAvgInputs.length; i++) {
        let avg = calcAvgForView(0);
        $(`#custom-avg-input-${i}`).val(avg.toFixed(2));
        document.getElementById(`custom-avg-input-${i}`).value = avg.toFixed(2);
        // Update the difference gap
        let latestOptimalAvg = document.getElementById(`prospective-avg-input-${i}`).value;
        let latestActualAvg = $(`#custom-avg-input-${i}`)[0].value;
        document.getElementById(`ability-difference-value-${i}`).value = (latestActualAvg - latestOptimalAvg).toFixed(2);
      }
      // Update the final average
      let avg = totalCalcAbbAvg();
      $("#total-avg-input").val(avg.toFixed(2));
      updateTargetOverallAccessDiff();
    });
  });



  //createSaveWorkButton(survey);
  createShowInstructionsButton(survey);
  //createPreviousSurvey(surveys, survey, idx);

  /**
   * Funtionality that will execute if this survey is the last of all surveys ( which is based on policies)
   */
  function completeLastSurvey(sender, options) {
    if (!doAnimantion) return;
    $('.sv_next_btn').hide();
    convertResults(survey);
    options.allowComplete = true;
    setTimeout(function () {
      doAnimantion = false;
      doAnimantion = true;
    }, 50);
    animate("slideUp", 400);
    animate("slideDown", 200);
  }

  /**
   * Funtiality that will execute if this survey is not the last of all surveys ( which is based on policies)
   */
  function completeNonLastSurvey(sender, options) {
    $surveyLoadingModal.modal({ backdrop: "static", keyboard: false });
    options.allowComplete = false;
    saveStateMiddleware(sender, true);
    convertResults(sender);
    surveyRelated(surveys, idx + 1, true);
  }

  let surveyTitles = surveys.map(function (surveyObj) {
    return surveyObj.title;
  });
  $('.sv_next_btn').hide();

  setupNavigator(survey, surveyTitles, idx);

  if (currentState[title]) {
    const { data: loadedData } = currentState[title];
    for (let domain in loadedData) {
      if (domain.indexOf("BC") === -1) continue;
      const dBusCaps = loadedData[domain];

      for (let dBusCap in dBusCaps) {
        const dBusCapID = getIDFromGeneratedQuestion(dBusCap);
        const { selectedBC } = dBusCaps[dBusCap];

        if (!selectedBC) {
          $(`[dbuscap-id=${dBusCapID}`).addClass("d-none");
        }
        setVisibilitySurveyPageBasedDBCID(survey, dBusCapID, selectedBC);
      }
    }
    survey.currentPageNo = currentState[title].currentPageNo;
    survey.data = currentState[title].data;
  }

  if (doLoadState) {
    loadState(survey);
  }
}

/** Creates a div to indicate to click on the arrow to expand/hide questions in each section. */
function createMessageForExpand() {
  const html = `Please click on the arrow <span class="down-arrow"></span> to show/ hide the questions in each section`;
  const $div = $(`<div style="margin-bottom: 0 !important"></div>`)
    .addClass("mt-3 alert alert-success")
    .attr("id", "expand-error")
    .html(html);

  return $div;
}

/**
 * Create the the navigation for dBusCaps with the ability to click
 */
// function setupNavigationBar(survey, idx) {
//   const options = [...buttonTitles[idx]];
//   const selector = document.getElementById("pageSelector");
//   selector.innerHTML = "";

//   options.unshift({ id: 0, title: "Digital Business Capabilities Overview" });

//   const length = options.length;

//   for (let i = 0; i < length; i++) {
//     let option = document.createElement("button");

//     option.addEventListener("click", function () {
//       survey.currentPageNo = i;
//       $("#access-controls .spinner-border").removeClass("d-none");
//     });

//     option.setAttribute("dBusCap-id", options[i].id);

//     option.innerHTML = options[i].title;
//     option.classList.add("progress-bar-buttons");
//     // Highlight the first progress bar button
//     if (i === 0) option.classList.add("progress-bar-buttons-current-active");

//     selector.appendChild(option);
//   }

//   updateButtonsClickAbility(0);
// }

function setupNavigationBar(survey, idx) {
  const options = [...buttonTitles[idx]];
  const selector = document.getElementById("pageSelector");
  selector.innerHTML = "";

  options.unshift({ id: 0, title: "Digital Business Capabilities Overview" });

  const length = options.length;

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');

  const slider = document.createElement('div');
  slider.classList.add('slider');

  for (let i = 0; i < length; i++) {
    let option = document.createElement("button");

    option.addEventListener("click", function () {
      survey.currentPageNo = i;
      $("#access-controls .spinner-border").removeClass("d-none");
    });

    option.setAttribute("dBusCap-id", options[i].id);

    option.innerHTML = options[i].title;
    option.classList.add("progress-bar-buttons");
    // Highlight the first progress bar button
    if (i === 0) option.classList.add("progress-bar-buttons-current-active");

    slider.appendChild(option);
  }

  // Agregar el slider al contenedor
  sliderContainer.appendChild(slider);

  // Agregar el contenedor del slider al selector
  selector.appendChild(sliderContainer);

  // Obtén los elementos relevantes del DOM
  const sliderElement = sliderContainer.querySelector('.slider');
  const sliderItems = slider.querySelectorAll('button');

  // Inicializa algunas variables
  let currentIndex = 0;
  let isTransitioning = false;

  // Calcula la cantidad de desplazamiento necesario para mover un botón y medio
  const slideWidth = sliderItems[0].offsetWidth;
  const displacement = -1 * (slideWidth * 1.5);

  // Función para mover el slider a una sección específica
  function goToSection(index) {
    if (index < 0 || index >= sliderItems.length || isTransitioning) {
      return;
    }

    isTransitioning = true;

    // Calcula el desplazamiento actualizado en base al índice
    const updatedDisplacement = displacement * (index + 1); // Añade 1 al índice

    // Aplica la transformación de desplazamiento con una animación suave
    sliderElement.style.transition = "transform 0.3s ease-in-out";
    sliderElement.style.transform = `translateX(${updatedDisplacement}px)`;

    // Actualiza el índice actual
    currentIndex = index;

    // Restaura la transición después de que termine la animación
    setTimeout(() => {
      sliderElement.style.transition = "";
      isTransitioning = false;
    }, 300);
  }

  // Escucha los eventos de teclado para navegar a través del slider
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      goToSection(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      goToSection(currentIndex + 1);
    }
  });

  // Estilos CSS adicionales
  sliderContainer.style.width = "1200px"; // Ajusta el ancho del contenedor según tus necesidades
  sliderItems.forEach(item => {
    item.style.height = "100px"; // Ajusta la altura de los botones según tus necesidades
  });

  // Animación al cambiar de sección
  sliderElement.style.transition = "transform 0.3s ease-in-out";

  // Crear contenedor para las flechas de navegación
  // const arrowsContainer = document.createElement('div');
  // arrowsContainer.classList.add('slider-arrows-container');

  // // Agregar flechas de navegación
  // const sliderArrowLeft = document.createElement('button');
  // sliderArrowLeft.classList.add('slider-arrow', 'slider-arrow-left');
  // sliderArrowLeft.innerHTML = '&lt;';

  // const sliderArrowRight = document.createElement('button');
  // sliderArrowRight.classList.add('slider-arrow', 'slider-arrow-right');
  // sliderArrowRight.innerHTML = '&gt;';

  // // Agregar flechas de navegación al contenedor del carrusel
  // arrowsContainer.appendChild(sliderArrowLeft);
  // arrowsContainer.appendChild(sliderArrowRight);

  // // Agregar contenedor de flechas de navegación antes del slider
  // sliderContainer.insertAdjacentElement('beforebegin', arrowsContainer);

  // // Navegación a través de los botones de flecha
  // sliderArrowLeft.addEventListener('click', () => {
  //   goToSection(currentIndex - 1);
  // });

  // sliderArrowRight.addEventListener('click', () => {
  //   goToSection(currentIndex + 1);
  // });


  // Resto del código necesario para el slider
  // ...
}










/**
 * Create the first navigation that will display all the policies
 */
function createSurveyTitles(surveyTitles, idx) {
  const selector = document.getElementById("survey-titles");
  selector.innerHTML = "";

  let length = surveyTitles.length;

  surveyTitles.forEach(function (surveyTitle, index) {
    let option = document.createElement("div");
    let optionText = document.createElement("p");
    optionText.innerText = surveyTitle;
    let imageClass = surveyTitle.toLowerCase();
    imageClass = imageClass.split(" ").join("-");

    let image = document.createElement("div");
    image.className = `policy-images ${imageClass}-policy-images`;

    option.appendChild(image);
    option.appendChild(optionText);
    selector.appendChild(option);

    option.className = "progress-bar-divs ";
    // The previous completed primary progress bar buttons have no red borders
    if (index < idx) option.classList.add("progress-bar-divs-active");
    // The currently active primary progress bar button has red borders
    if (index === idx) option.classList.add("progress-bar-divs-current-active");

    option.style.width = 98 / length + "%";
    if (length === 1) option.style.width = "100%";
  });
}

/**
 * Create the navigation above the survey with section about the polies and also dBusCaps
 * @param {Object} survey
 */
function setupNavigator(survey, surveyTitles, idx) {
  setupNavigationBar(survey, idx);
  createSurveyTitles(surveyTitles, idx);
}

document.querySelector("#checkinForm").addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

/**
 * Validate the information of the form and takes dynamicall the checkboxed that are selected
 */
async function validateForm() {
  document.querySelector(".spinner-border").classList.remove("d-none");
  var form = document.getElementById("checkinForm");
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");
    document.querySelector(".spinner-border").classList.add("d-none");
  } else {
    $("#checkboxes input").each(function () {
      const checked = $(this).is(":checked");
      const policy = $(this)
        .attr("id")
        .split("-")
        .slice(0, -1)
        .map((temp) => capitalize(temp))
        .join(" ");

      checkboxes = { ...checkboxes, [policy]: checked };
    });

    fullName = document.getElementById("validationCustom01").value;
    organisation = document.getElementById("validationCustom03").value;
    email = document.getElementById("validationCustom04").value;
    country = document.getElementById("validationCustom02").value;

    if (Object.values(checkboxes).every((v) => v === false)) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
    } else {
      let response = await FILES;
      callBackForRequest(response);
    }
  }
}

function callBackForRequest(response) {
  createSurvey(response);

  $("#initForm").collapse("hide");
  $("#surveyCard").collapse("show");
}

/**
 * Helper Function
 */
function bcFormaterFunc(dbusOfPolicy) {
  return (
    dbusOfPolicy.id +
    ") <b>" +
    dbusOfPolicy.name +
    "</b><br><p style='font-size:13px'><i>" +
    dbusOfPolicy.description +
    "</i></p>"
  );
}

const bbLinks = (area) => {
  const links = {
    "European Legal Act":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalAct",
    "National Legal Act":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalAct",
    "Legal Agreement":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalInteroperabilityAgreement",
    Provider:
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fPublicServiceProvider",
    Consumer:
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fPublicServiceConsumer",
    "Business Information":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fBusinessInformation",
    "Digital Service Delivery Model":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fServiceDeliveryModel",
    "Organisational Agreement":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fOrganisationalAgreement",
    Representation:
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fRepresentation",
    Ontology:
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fOntology",
    "Data Policy":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDataPolicy",
    "Semantic Agreement":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSemanticAgreement",
    "Shared Knowledge Base":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSharedKnowledgeBase",
    Interfaces:
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fMachineToMachineInterface",
    "Technical Agreement":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fTechnicalAgreement",
    "Interoperable European Solution":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fInteroperableEuropeanSolutionService",
    "Digital Service Infrastructure":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalServiceInfrastructure",
    "Hosting and Networking Infrastructure":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalServiceInfrastructure",
    "Shared Platform":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSharedPlatform",
    "Service Delivery Model":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fServiceDeliveryModel",
    "Data Mapping":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDataMapping",
    "Legal Agreements / International Treaties":
      "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalInteroperabilityAgreement",
  };

  if (area in links) {
    return `<a target="_blank" href="${links[area]}">${area}</a>`;
  }

  return area;
};

/**
 * Helper Function
 */
const bbFormaterFunc = (bb, dBusCapID) => {
  let baSentence;
  let explanatorySentence = "";
  let dpsWords = [];

  if (dBusCapID === "BABC5") {
    explanatorySentence = bb.artificialIntelligence;
  } else if (dBusCapID === "BABC6") {
    explanatorySentence = bb.digitalCommunication;
  } else if (dBusCapID === "BABC9") {
    explanatorySentence = bb.dataManagement;
  } else if (dBusCapID === "BABC12") {
    explanatorySentence = bb.caseWorkflowManagement;
  } else if (dBusCapID === "BABC1") {
    explanatorySentence = bb.electronicIdentification;
  } else if (dBusCapID === "HDBC01") {
    explanatorySentence = bb.consultation;
  } else if (dBusCapID === "HDBC02") {
    explanatorySentence = bb.laboratory;
  } else if (dBusCapID === "HDBC04") {
    explanatorySentence = bb.prescription;
  } else if (dBusCapID === "HDBC07") {
    explanatorySentence = bb.medicalImaging;
  } else if (dBusCapID === "HDBC16") {
    explanatorySentence = bb.secondaryUse;
  } else if (dBusCapID === "HDBC06") {
    explanatorySentence = bb.electronicHealth;
  }
  if ((bb.policy === "business agnostic" || bb.policy === "health") && explanatorySentence !== "") {
    baSentence = `
      <br>
      ${explanatorySentence}
      </br>
    `;
    // `
    // <br>
    // <u> 
    // <a href="https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalBusinessCapability" target="_blank">
    // digital business capability</a> 
    // because</u> ${explanatorySentence}
    // <br>`;

  } else {
    baSentence = ``;
  }

  // bold the word should or might
  if (baSentence !== ``) {
    const baSentenceArr = baSentence.split(' ')
    const baSentenceArr2 = baSentenceArr.map(element => {
      if (element === 'might') {
        return `<b>might</b>`
      } else if (element === 'should') {
        return '<b>should</b>'
      }
      return element
    })
    baSentence = baSentenceArr2.join(' ');
  }

  const botonPromise = createButtonInfoAsync(bb, dBusCapID);

  extractWordsDPS(baSentence,dpsWords);
  extractDelegationDPS(baSentence,dpsWords);
  
  botonPromise.then(({ button, informacionDiv }) => {
    // Agregar elementos al DOM u otras operaciones
    document.body.appendChild(button);
    document.body.appendChild(informacionDiv);
  }).catch(err => console.log(err));

  return (`<div id="${bb.id} - ${dBusCapID}">
          <div id="${bb.id} -- ${dBusCapID}">     
          <p><b class="req">Requirement: </b>${bb.abb} <b>${bb.specificQuestion}</b></p><br>
          </div>
          <br>
          <br>
          <p>To what extent your AS-IS Digital Public Services (DPS) below meet this requirement?
          <br>
          <div class="survContainer">
          <br>
          ${checksSurvey(dpsWords)}
          <br>
          </div>
          <br>
          </div>
          `);
};

/**
 * Coge el parametro baSentence y lo recorta para quedarse unicamente con la palabra "Delegation of Power" si esta va seguida de la palabra "DPS", el resto de 
 * palabras no las añade al array.
 * @param {*} baSentence 
 * @returns 
 */
function extractDelegationDPS(baSentence, dpsWords) {
  const regex = /DPS\s(.*?)\sDPS/g;
  const matches = [...baSentence.matchAll(regex)];
  const arrayPalabras = matches.map(match => match[1]);

  if (arrayPalabras.length === 1 && arrayPalabras[0] === "Delegation of Power") {
    arrayPalabras.forEach(word =>{
      dpsWords.push(word);
    });
    return arrayPalabras;
  } else {
    return [];
  }
}

/**
 * Coge el parametro baSentence y lo recorta para las palabras previas a la palabra DPS, con el condicional de que si es "Power", no lo añada al array.
 * @param {*} baSentence 
 * @returns 
 */

function extractWordsDPS(baSentence, dpsWords) {
  const regex = /(?:^|\s)(\S+)\sDPS/g;
  const matches = [...baSentence.matchAll(regex)];
  const arrayPalabras = matches.map(match => match[1]);

  const indexToRemove = arrayPalabras.indexOf("Power");
  if (indexToRemove !== -1) {
    arrayPalabras.splice(indexToRemove, 1);
  }
  arrayPalabras.forEach(word =>{
    dpsWords.push(word);
  });
  return arrayPalabras;
}

//Function for add checkbox for every DPS element
function checksSurvey(array) {
  var dpsInfo = [];
  var dpsId = 0;
  array.forEach(element => {
    dpsInfo.push(`
      <div class="additional-comment-container">
        <input type="checkbox" id="checkbox-${dpsId}" class="dps-checkbox" checked="true">
        <label>${element}</label>
        <div class="rating-container" id="rating${dpsId}">${addValoration(element)}</div>
        <div class="na-container" id="na${dpsId}" style="display:none;"><label class="naLabel">Not Applicable</label></div>
        <input type=text class="additional-comments-input" placeholder="Additional Comments:">
      </div>
    `);
    dpsId = dpsId +1;
  });

  dpsInfo.push(`
  
  <div>
    <button id="addDpsButton" class="btn-primary">Add DPS</button>
  </div>  
`);



  return dpsInfo.join('');
}

function addValoration(element) {

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("rating-button")) {
      const buttons = event.target.parentElement.querySelectorAll(".rating-button");
      buttons.forEach(button => button.classList.remove("selected"));
      event.target.classList.add("selected");

      const $svRow = $(event.target).closest(".sv_row");
      if ($svRow.length > 0) {
        const rowIndex = $svRow.index();
        const avg = calcAvgForView(rowIndex);
        $(`#custom-avg-input-${rowIndex -1}`).val(avg.toFixed(2));
      } else {
        console.log("Parent element with .sv_row class not found.");
      }
    }
  });

  $(document).on('change', '.dps-checkbox', function() {
    let parentDiv = $(this).closest('.additional-comment-container');
    let ratingContainer = parentDiv.find('.rating-container');
    let naContainer = parentDiv.find('.na-container');
    let naCheckbox = naContainer.find('input[type="checkbox"]');

    if ($(this).is(':checked')) {
      ratingContainer.show();
      naContainer.hide();
      naCheckbox.prop('checked', false);
    } else {
      ratingContainer.hide();
      naContainer.show();
      naCheckbox.prop('checked', true);
    }
});
  
  return `
      <div class="rating-buttons">
        <button type="button" class="rating-button" id="button0" value="0">0</button>
        <button type="button" class="rating-button" id="button1" value="1">1</button>
        <button type="button" class="rating-button" id="button2" value="2">2</button>
        <button type="button" class="rating-button" id="button3" value="3">3</button>
        <button type="button" class="rating-button" id="button4" value="4">4</button>
        <button type="button" class="rating-button" id="button5" value="5">5</button>
      </div>
  `;
}

async function createButtonInfoAsync(bb, dBusCapID) {
  // Creamos el botón dinámicamente
  const button = document.createElement("button");
  button.classList.add("btn-primary");
  button.style.marginTop = "10px";
  button.textContent = "Show Additional Information";

  // Esperamos a que se cree el div con el id bb.id + " - " + dBusCapID
  await new Promise((resolve) => {
    const intervalId = setInterval(() => {
      const divBB = document.getElementById(`${bb.id} - ${dBusCapID}`);
      const reqDiv = document.getElementById(`${bb.id} -- ${dBusCapID}`);

      if (divBB) {
        clearInterval(intervalId);
        // Creamos el div "informacion" dinámicamente
        const informacionDiv = document.createElement("div");
        informacionDiv.textContent = `-EIRA Stereotype: <<eira:${bb.area}>>`;
        informacionDiv.style.marginTop = "15px";
        informacionDiv.style.display = "none"; // Inicialmente oculto

        // Añadimos un manejador de eventos para cuando se haga clic en el botón
        button.addEventListener("click", function () {
          // Cambiamos la visibilidad del div "informacion" al hacer clic
          informacionDiv.style.display = informacionDiv.style.display === "none" ? "block" : "none";
          
          // Cambiar el texto del botón según la visibilidad del div "informacion"
          if (informacionDiv.style.display === "none") {
            button.textContent = "Show Additional Information";
          } else {
            button.textContent = "Hide Additional Information";
          }
        });
        // Agregamos el botón al final del div con el ID bb.id + " - " + dBusCapID
        reqDiv.append(button);

        // Agregamos el div de información al final del div con el ID bb.id + " - " + dBusCapID
        reqDiv.append(informacionDiv);

        resolve();
      }
    }, 100); // Verificar cada 100ms si el div se ha creado
  });
}

/**
 * Preparing the question for the survey
 */
function createSurvey(response) {
  renderSurvey(response);
}

function renderSurvey(response)
{
  let title = "Business Agnostic Assessment";
  let pages = createSurveyPages(response);

  var surveyJSON = { 
    title: title,
    pages: pages,
    pageNextText: "Next",
    pagePrevText: "Previous",
    completeText: "Complete",
    showProgressBar: "top",
    showQuestionNumbers: "off",
    showTOC: true
    };

    //Survey.JsonObject.metaData.addProperty("questionbase", "tooltip");
    Survey.StylesManager.applyTheme("defaultV2");
    var survey = new Survey.Model(surveyJSON);
    survey.autoSave = true;

    survey.onCurrentPageChanged.add(function(sender, options) {
      if (sender.currentPageNo === 0) { // Si es la primera página
          sender.pageNextText = "Submit";
      } else {
          sender.pageNextText = "Next"; // Restablecer el texto a "Next" para las demás páginas
      }
  });

    survey.onUpdateQuestionCssClasses.add(function(_, options) {
      const classes = options.cssClasses;
      if (options.question.name.includes('REQUIREMENT')) {
        classes.root = 'custom-question-class';
      }
    });

    survey.onAfterRenderQuestion.add(function(sender, options) {
      if (options.question.name.includes('REQUIREMENT')) {
          const index = parseInt(options.question.name.split('-').pop());
          const abb = abbList[index];
          
          // Añadir botón "Show More"
          options.htmlElement.innerHTML += `<button class="expand-btn">Show More</button>`;
          
          // Añadir div oculto para información adicional
          options.htmlElement.innerHTML += `
              <div class="hidden-info">
                  ${abb.Rationale || 'TESTING ADDITIONAL INFO BUTTON'}
              </div>
              <style>
                  .hidden-info {
                      display: none;
                  }
              </style>
          `;
  
          // Vincular evento al botón
          const expandBtn = options.htmlElement.querySelector('.expand-btn');
          expandBtn.addEventListener('click', function() {
              const hiddenInfo = options.htmlElement.querySelector('.hidden-info');
              if (hiddenInfo.style.display === 'none') {
                  hiddenInfo.style.display = 'block';
              } else {
                  hiddenInfo.style.display = 'none';
              }
          });
      }
  });

  //Pours the survey data of a previously exported survey into the Survey object
  survey.data = currentState.data;

    $("#surveyCard").Survey({ model: survey });


    //survey.completeText = isLast ? "Complete" : "Next Survey";

    //survey.onCompleting.add(completeLastSurvey(survey));

    createSaveWorkButton(survey);
    createShowInstructionsButton(survey);

}

function createSurveyPages(response){
  let pages = [];

  if(response.length >= 3)
  {
    let abbList = response[0];
    let dbcList = response[1];
    let responses  = response[3];

    let initialPage = {
      name: 'Strategic Fit',
      elements: []
    };

    

    initialPage.elements.push({
      type: 'panel',
      name: 'instruction-panel',
      elements: [
        {
          type: 'html',
          html: `
          <div class="instructionPanel" style="font-size: 30px;"><b>Please select the Digital Business Capabilities (DBC) to be assessed and indicate the National Digital Strategic Fit (0 lowest,  5 highest)</b>
          <div class="tooltip-container">
              <i class="fa fa-question-circle text-primary"></i>
              <div class="tooltip-content">
              It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.
              </div>
          </div>
          </div>`
      }
      ]
  });
    dbcList.forEach(dbc => {
      

      let radioIndex = 0;
      initialPage.elements.push({
          type: 'panel',
          name: `${dbc.Name} - Panel`,
          elements: [
              {
                  type: 'checkbox', 
                  name: `${dbc.Name} - Include`,
                  title:" ",

                  choices: [
                      { value: "Include", text: dbc.Name }
                  ]
              },
              {
                  type: 'radiogroup',
                  name: `${dbc.Name} - Rating`,
                  title:" ",
                  description: dbc.Description,
                  choices: [
                      { value: 0, text: "0" },
                      { value: 1, text: "1" },
                      { value: 2, text: "2" },
                      { value: 3, text: "3" },
                      { value: 4, text: "4" },
                      { value: 5, text: "5" }
                  ],
                  colCount: 5
              }
              
          ]
          
      });
      radioIndex++;
  });

    pages.push(initialPage);
    //Adds "elements" property to the DBCs so to fill it when processing the ABB list
    dbcList.forEach(function(dbc, index, array){dbc.elements = addViewsToDbc(); array[index] = dbc});

    let dpsList = response [2];

    

    //ABB elements are added to the DBC list so to create the panel structure needed by SurveyJS
    let index = 0
    abbList.forEach(abb => {
      abb.DBCs.forEach(abbDbc => {
        dbcList.filter(dbc => dbc.ID == abbDbc).forEach(dbc => {
            dbc.elements.forEach(function(element, dbcIndex, dbcElements) {
                if (element.name == abb.View) {
                    if (abb.View === "Expected Public Value & Estimated Budget") {
                    } else {
                        // Contenido HTML
                        // let htmlContent = {
                        //     type: "html",
                        //     html: "<strong>To what extent the AS-IS Digital Public Services below meet the requirement?</strong>"
                        // };
                        // Información adicional
                        let additionalInfo = {
                            name: dbc.Name.concat(' - ', abb.View, ' - Additional-Info'),
                            type: "panel",
                            title: "Additional Information",
                            state: "collapsed",
                            elements: [
                                {
                                    type: "html",
                                    html: abb.Rationale || ''
                                }
                            ]
                        };
                        // Requisito
                        let newRequirement = {
                            name: dbc.Name.concat(' - ', abb.View, '-', index++),
                            title: 'REQUIREMENT: '.concat(abb.Architecture_Building_Block),
                            description: abb.Description,
                            type: "panel",
                            state: "collapsed",
                            elements: [additionalInfo],
                            cssClass: "custom-panel-class"
                        };
    
                        Array.prototype.push.apply(newRequirement.elements, extractDpsFromDbc(dbc, dpsList, abbList));
    
                        element.elements.push(newRequirement);
                    }
                    dbcElements[dbcIndex] = element;
                }
            });
        });
    });
  });

      //Add all elements to the survey pages
      dbcList.forEach(
        dbc => {
          const htmlTitleElement = {
            type: "html",
            html: `<h3 class="dbcTitle" style="font-size:45px;"><a href="${dbc.ID}">DBC  ${dbc.Name}</a></h3>
            <p style="font-size:20px;">The DBC ${dbc.Description}</p>`
        };
        
        pages.push({
            name: dbc.Name,
            visibleIf: `{${dbc.Name} - Include} contains 'Include'`,  
            elements: [htmlTitleElement, ...dbc.elements],
            description: " "
        });
        }
      );
  }else
  {
    document.querySelector("#previous-work-error").classList.remove("d-none");
      return;
  }

  return pages;

}

function addViewsToDbc(){

  const surveyViews = [
    { name: "Legal", title: "Legal View", type: "panel", state: "collapsed", elements:[], cssClass: "custom-view-class" },
    { name: "Organisational", title: "Organisational View", type: "panel", state: "collapsed", elements:[], cssClass: "custom-view-class" },
    { name: "Semantic", title: "Semantic View", type: "panel", state: "collapsed", elements:[], cssClass: "custom-view-class" },
    { name: "Technical - Application", title: "Technical - Application View", type: "panel", state: "collapsed", elements:[], cssClass: "custom-view-class" },
    { name: "Technical - Infrastructure", title: "Technical - Infrastructure View", type: "panel", state: "collapsed", elements:[], cssClass: "custom-view-class" },
    { name: "Expected Public Value & Estimated Budget", title: "Expected Public Value & Estimated Budget", type: "panel", state: "collapsed", elements:[], cssClass: "custom-view-class" }
  ];

  return surveyViews;
}

function extractDpsFromDbc(DBC, DpsList, abbList){
  let scoreIndex = 0;
  let processedDps = []; 
  let scoreNames = [];
  const specificABB = abbList.find(abb => abb.DBCs.includes(DBC.ID));
  if (!specificABB) {
    console.error('ABB específico no encontrado');
    return [];
}

  DBC.Digital_Public_Services.forEach(dbcDps =>
    {
      let extractedDps = DpsList.filter(dps => dps.ID == dbcDps.ID)[0];
      let scoreName = DBC.Name.concat(' - ',extractedDps.Name, scoreIndex,  ' - Score');
      scoreNames.push(`${scoreName}`);
      
      processedDps.push({
        name: "dpsQuestion-" + scoreIndex,
        type: "html",
        html: `<strong>To what extent the AS-IS Digital Public Service ${extractedDps.Name} below meet the requirement?</strong>`
      });
      
      processedDps.push({
        name: "dpsLink",
        type: "html",
        html: `<div class="dpsInfo" ><b><p style="font-size:20px;">DPS <a style="font-size:20px;" href="${extractedDps.ID}">${extractedDps.Name}</a></p></b><p>${extractedDps.Description}</p></div>`
    }),
      
      processedDps.push({
        name: scoreName,
        title: " ",
        type: "radiogroup",
        showNoneItem: true,
        noneText: "Not Applicable",
        colCount: 0,
        choices: [
          { value: 0, text: "0" },
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" }
        ]
    },

    {
        name: DBC.Name.concat(' - ', extractedDps.Name, ' - Comments'),
        title: "Additional Comments",
        type: "comment",
        placeHolder: "Enter your comments here...",
        rows: 2,
        cols: 20
    })
    scoreIndex++;
    });

    processedDps.push({
      name: DBC.Name.concat(' - Summary'),
      type: "html", 
      html: `<h6>Requirement ${specificABB.Architecture_Building_Block} Assessment Summary</h6>`  
  })
    
  const sumScores = scoreNames.map(score =>`(iif({${score}} = "none" or {${score}} = null, 0, {${score}}))`).join(" + ");
  const divisor = scoreNames.length;
  const expressionString = `(${sumScores}) / ${divisor}`;
  processedDps.push({
    name: DBC.Name.concat(' - Total Score'),
    type: "expression",
    title: "The overall assessed ability to support the digital business capability " + DBC.Name + " is: ",
    expression: expressionString,
    visible: true  
  });


  processedDps.push({
    name: DBC.Name.concat(' - Target Prospective Ability'),
    type: "text",
    inputType: "range", 
    title: "Please, indicate the Target Prospective Ability to support the Digital Business Capability - Legal requirements (0-5):",
    min: 0,  
    max: 5,  
    step: 1, 
    defaultValue: 0, 
    visible: true
});

  processedDps.push({
    name: DBC.Name.concat(' - Gap Difference'),
    type: "expression",
    title: "Therefore, the gap between the Target Prospective Average Ability and the Overall Assessed Ability to support the Digital Business Capability is: ",
    expression: "{".concat(DBC.Name, ' - Total Score', "} - {", DBC.Name, ' - Target Prospective Ability', "}"),
    visible: true
  });
 
    return processedDps;
}

function loadState(survey) {
  let title = survey.title;
  if (currentState[title]) {
    const data = currentState[title].data || {};
    survey.data = data;
    survey.currentPageNo = currentState[title].currentPageNo;

    for (let bc in data) {
      if (bc.indexOf("BC") === -1) continue;
      let questions = data[bc];

      for (let question in questions) {
        let id = getIDFromGeneratedQuestion(question);
        selectedBC[id] = questions[question].selectedBC;
        changeActiveStateAtButtonsTitles(id, selectedBC[id]);
      }
    }
  }
}


/**
 * Helper function for saveStateMiddleware function
 */
const saveSelectedQuestions = (firstPageBCes, surveyTitle) => {
  let tempV1 = {};
  firstPageBCes.data.forEach((bc) => {
    let { name } = bc;
    let id = getIDFromGeneratedQuestion(name);

    tempV1 = {
      ...tempV1,
      [name]: { selectedBC: selectedBC[id] || false },
    };
  });

  const temp = { ...currentState[surveyTitle] };
  delete temp.checkboxes;
  delete temp.country;
  delete temp.email;
  delete temp.fullName;
  delete temp.organisation;

  const { checkboxes, country, email, fullName, organisation } = currentState;

  const data = temp.data;

  for (let key in data) {
    if (key.indexOf("BC") === -1) continue;

    for (let question in tempV1) {
      data[key][question] = {
        ...data[key][question],
        ...tempV1[question],
      };
    }
  }

  currentState = {
    ...currentState,
    [surveyTitle]: { ...temp },
    checkboxes,
    country,
    email,
    fullName,
    organisation,
  };
};

/**
 * Helper function for saveState function
 */
function saveStateMiddleware(survey, completed) {
  let completedSurvey = completed || false;
  let title = survey.title;
  let data = survey.data;
  // Mark the not applicable requirements as such
  for (let i = 0; i < selectedNonApplicableReqIDs.length; i++) {
    for (let [key, value] of Object.entries(data)) {
      for (let [key2, value2] of Object.entries(value)) {
        let keyId = getIDFromGeneratedQuestion(key2).split('>')[2]?.replace(" - ", "")
        if (keyId === selectedNonApplicableReqIDs[i]) {
          //delete data[key][key2]
          data[key][key2]['Ability to support the dBusCap'] = "NotApplicable";
        }
      }
    }
  }
  let res = {
    [title]: {
      currentPageNo: survey.currentPageNo,
      data: data,
      completed: completedSurvey,
    },
    fullName: fullName,
    organisation: organisation,
    email: email,
    country: country,
    checkboxes,
  };
  Object.assign(currentState, res);
  saveSelectedQuestions(survey.getPlainData()[0], title);
}

/**
 * Functionality to create the file and prompts to the user for saving the save_work file
 * @param {Object} survey
 */
function saveState(survey) {

  var res = { currentPageNo: survey.currentPageNo, data: survey.data, contactData: {fullName, organisation, email, country}};

  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(res, null, 2)], {
      type: "application/json",
    })
  );
  a.setAttribute("download", "eGovERA_save_work.json");
  a.click();
}

/**
 *
 * @param {Array} surveys
 * @param {Number} currentSurveyIndex
 */
function createPreviousSurvey(surveys, survey, currentSurveyIndex) {
  if (!currentSurveyIndex) return;
  const $footer = $(".panel-footer");
  const $button = $("<button></button>")
    .attr("id", "previous-survey-button")
    .attr("type", "button")
    .addClass("btn btn-primary")
    .text("Previous Survey");

  $footer.prepend($button);

  $button.on("click", function () {
    saveStateMiddleware(survey);
    surveyRelated(surveys, currentSurveyIndex - 1);
  });
}

/**
 * Create save work button at the footer of the survey
 * @param {Object} survey
 */


function createShowInstructionsButton(survey) {
  const saveButton = document.querySelector("#save-work-btn");
  const parent = saveButton.parentNode;  // Obtener el contenedor o padre de saveButton

  const showInstrBtn = document.createElement("button");
  const showLabel = document.createTextNode("Show Instructions");
  showInstrBtn.appendChild(showLabel);
  showInstrBtn.className = "btn btn-primary";
  showInstrBtn.setAttribute("id", "show-instruct-btn");

  showInstrBtn.addEventListener("click", function () {
    $("#dbcInstructions").modal("show");
  });

  // Añade el botón showInstrBtn justo después de saveButton
  parent.insertBefore(showInstrBtn, saveButton.nextSibling);

  setTimeout(() => {
    const buttonInstr = document.querySelector("#show-instruct_btn");
    if (buttonInstr) {
      buttonInstr.style.display = "block";
      buttonInstr.style.marginTop = "1%";
    }
  }, 100);
}

function createSaveWorkButton(survey) {

  let saveWorkBtn = document.querySelector("#save-work-btn");
 
  saveWorkBtn.addEventListener("click", function () {
    saveState(survey);
  });
}


/**
 * Create current working path Label at the top of the survey
 */
function createLabel() { }

/**
 * Add skip value in the save_work file
 */
const saveSelectedBCs = () => {
  for (let policy in resultsToSave) {
    for (let temp in resultsToSave[policy]) {
      if (temp !== "BC") continue;

      const digBusCaps = resultsToSave[policy]["BC"];
      for (let idx = 0; idx < digBusCaps.length; idx++) {
        let a = digBusCaps[idx];
        a.selectedBC = selectedBC[a.id] || false;
      }
    }
  }
};

/**
 * Convert survey results in another format for more loose coopling
 * @param {Object} survey
 */
function convertResults(survey) {
  let results;
  let returnData = {};
  returnData[survey.title] = returnData[survey.title] || {};
  console.log("Survey data: ", JSON.stringify(survey.data, null, 3));
  let data = survey.data;
  // Remove the non applicable requirements
  for (let i = 0; i < selectedNonApplicableReqIDs.length; i++) {
    for (let [key, value] of Object.entries(data)) {
      for (let [key2, value2] of Object.entries(value)) {
        let keyId = getIDFromGeneratedQuestion(key2).split('>')[2]?.replace(" - ", "")
        if (keyId === selectedNonApplicableReqIDs[i]) {
          delete data[key][key2]
        }
      }
    }
  }

  results = data;

  let BCS = {};
  let BBS = {};
  console.log("results: ", results);
  for (let key in results) {
    if (key.includes("BC")) {
      Object.assign(BCS, results[key]);
    } else if (key.includes("BB")) {
      Object.assign(BBS, results[key]);
    }
  }

  let returnBC = [];
  for (let bc in BCS) {
    let id = getIDFromGeneratedQuestion(bc).trim();
    let objToStore = Object.assign({}, BCS[bc]);
    objToStore.budget = Number(objToStore.budget);
    objToStore.id = id;
    returnBC.push(objToStore);
  }

  let returnBB = [];
  for (let bb in BBS) {
    let id = getIDFromGeneratedQuestionForBB(bb).trim().split(">")[2];
    let objToStore = Object.assign({}, BBS[bb]);
    objToStore.id = id;
    returnBB.push(objToStore);
  }

  returnData[survey.title].BC = returnBC;
  returnData[survey.title].BB = returnBB;

  returnData.fullName = fullName;
  returnData.organisation = organisation;
  returnData.email = email;
  returnData.country = country;

 

  Object.assign(resultsToSave, returnData);
  saveSelectedBCs();
  console.log(resultsToSave, returnData);
}

const getIDFromGeneratedQuestionForBB = (bb) => {
  //const newBB = bb.replace("<div><b>Requirement</b></div><p>", "");
  return getIDFromGeneratedQuestion(bb);
};

const removeUnSelectedBCes = () => {
  const resultsToSaveCopy = { ...resultsToSave };
  const country = resultsToSaveCopy.country;
  const email = resultsToSaveCopy.email;
  const fullName = resultsToSaveCopy.fullName;
  const organisation = resultsToSaveCopy.organisation;
  delete resultsToSaveCopy.country;
  delete resultsToSaveCopy.email;
  delete resultsToSaveCopy.fullName;
  delete resultsToSaveCopy.organisation;

  const newResults = {};

  for (let policy in resultsToSaveCopy) {
    const categories = resultsToSaveCopy[policy];
    newResults[policy] = newResults[policy] || {};
    for (let category in categories) {
      let array = [];
      if (category !== "BC") array = categories[category];
      else {
        array = categories[category].filter((item) => item.selectedBC);
      }
      newResults[policy][category] = array;
    }
  }

  resultsToSave = { ...newResults, country, email, fullName, organisation };
};

const handleSurveyCompletion = (survey) => {
  let myPreparedJson = {
    "BB": [
      {
        "Ability to support the dBusCap": 3,
        "id": "BAABB1 - BABC1"
      },
      {
        "Ability to support the dBusCap": 3,
        "id": "BAABB3 - BABC1"
      },
      {
        "Ability to support the dBusCap": 3,
        "id": "BAABB4 - BABC1"
      },
      {
        "Ability to support the dBusCap": 3,
        "id": "BAABB6 - BABC1"
      },
      {
        "Ability to support the dBusCap": 3,
        "id": "BAABB14 - BABC1"
      },
    ]
  };

  myPreparedJson.fullName = fullName;
  myPreparedJson.organisation = organisation;
  myPreparedJson.email = email;
  myPreparedJson.country = country;
  myPreparedJson = buildJson(myPreparedJson);
  saveResultToFile(myPreparedJson);
};

/**
 * Method to retrieve all BBs, their related DPS and build a JSON with the results
 */

function buildJson(json)
{
  console.log($(function(){
    $('input[type="checkbox-0"]').each(function(i,item){
        if(ids.indexOf($(item).data('id')) > -1){
          return $(item).prop("checked", "checked");
        }
    });
    }));

  

  return null;  
}

/**
 *
 * Functionality to create the file and prompts to the user for saving the result file
 */
function saveResultToFile(survey) {
  const a = document.createElement("a");

  // saveSelectedBCs();
  // removeUnSelectedBCes();
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(survey, null, 2)], {
      type: "application/json",
    })
  );
  a.setAttribute("download", "survey_result.json");
  a.click();
  $("#surveySuccess").modal("show");
}
/**
 * Helper function for surveyPages function
 * @param {String} name
 * @param {Array} bbList
 * @param {String} question
 * @param {String} orientation
 * @returns {Object}
 */
function subSectionOfPage(name, bbList, question, orientation) {
  return {
    type: "matrixdropdown",
    name: orientation + " BB",
    title: `<span>
    Please, indicate to what extent each of the following <b>${orientation
        .split("-")
        .join(
          " "
        )}</b>  requirements are met by this digital business capability? 
      </span>`,
    columnMinWidth: "390px",

    /*     columns: [
          {
            name: "Ability to support the dBusCap",
            title: `<span style="display: none;">Ability to support the dBusCap </span>`,
            cellType: "rating",
            rateValues: range(0, 5),
          },
        ], 
        choices: range(0, 5),
        cellType: "rating",  */

    rows: bbList,
  };
}
/**
 * Create all survey pages except the first one with abbs on the top and the last section is the current bc
 */
function surveyPages(name, bcList, bbs) {
  let quetionVar = bbs.question;
  delete bbs.question;
  const template = {
    name: "Business Capabilities BC",
    elements: [],
    title: quetionVar,
    showTitle: false,
    description: "",
  };

  for (let policy in bbs) {
    let temp = subSectionOfPage(
      name,
      bbs[policy],
      quetionVar,
      capitalize(policy)
    );
    bbs[policy].length > 0 && template.elements.push(temp);
  }


  // const bc = {
  //   type: "matrixdropdown",
  //   name: "Business Capabilities BC",
  //   title: `Please, indicate the Expected Public Value and Estimated budget to this digital business capability`,
  //   tooltip:
  //     "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
  //   isRequired: true,
  //   columnMinWidth: "260px",
  //   columns: [
  //     {
  //       name: "Expected Public Value",
  //       title: `<span>Expected Public Value </span><span data-toggle="tooltip" data-html="true" title="${pubValueTooltip}">  <i class="fa fa-question-circle text-primary"></i></span>`,
  //       cellType: "rating",
  //       isRequired: true,
  //       rateValues: range(0, 5),
  //     },
  //     {
  //       name: "budget",
  //       title: `<span>Estimated budget (in millions EUR)</span><span data-toggle="tooltip" data-html="true" title="${budgetTooltip}">  <i class="fa fa-question-circle text-primary"></i></span>`,
  //       cellType: "number",
  //       isRequired: true,
  //     },
  //     {
  //       title: `<span>Target Prospective Average Ability</span><span data-toggle="tooltip" data-html="true" title="${perspectiveTool}"> <i class="fa fa-question-circle text-primary"></i></span>`,
  //       cellType: `rating`,
  //       isRequired: true,
  //       rateValues: range(0, 5),
  //     },
  //   ],
  //   choices: range(0, 5),
  //   cellType: "rating",
  //   rows: bcList,
  // };
  // template.elements.push(bc);

  return template;
}

function getStrategicFitTooltip(policy) {
  if (policy === "business-agnostic")
    return `It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.`;
  return `It reports the strategic priority assigned to the digital business capability by the ${policy} national digital agenda of the country.`;
}

/**
 * Creates the first's page for the survey that will contains all business capablities
 * Name not use because it is hard coded in the object in order to keep the values for the same question
 */
function surveyFirstPage(name, bcList, policy) {
  let title;
  //console.log(bcList, policy);
  let formattedPolicy = policy.toLowerCase().split(" ").join("-");
  if (formattedPolicy === "business-agnostic") {
    title = `<span>National Digital Strategy Fit</span><span data-toggle="tooltip" data-html="true" title="${getStrategicFitTooltip(
      formattedPolicy
    )}">  <i class="fa fa-question-circle text-primary"></i></span>`;
  } else {
    title = `<span>${policy} National Digital Strategy Fit</span><span data-toggle="tooltip" data-html="true" title="${getStrategicFitTooltip(
      formattedPolicy
    )}">  <i class="fa fa-question-circle text-primary"></i></span>`;
  }
  return {
    name: "Business Capabilities BC",
    elements: [
      {
        type: "matrixdropdown",
        name: "Business Capabilities BC",
        title:
          "Please select the Digital Business Capabilities (DBC) to be assessed and indicate the National Digital Strategic Fit (0 lowest,  5 highest)",
        tooltip:
          "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
        isRequired: true,
        columnMinWidth: "260px",
        columns: [
          {
            name: "National Digital Strategy Fit",
            title,
            cellType: "rating",
            rateValues: range(0, 5),
          },
        ],
        choices: range(0, 5),
        cellType: "rating",
        rows: bcList,
      },
    ],
  };
}


document
  .getElementById("previous-work")
  .addEventListener("change", function () {
    let file = event.target.files[0];
    if (file.type !== "application/json") {
      document.querySelector("#previous-work-error").classList.remove("d-none");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", async function (evt) {
      document.querySelector(".spinner-border").classList.remove("d-none");
      let content = JSON.parse(evt.target.result);
      
      if (!content.contactData || !content.data) {
        document.querySelector(".spinner-border").classList.add("d-none");
        document
          .querySelector("#previous-work-error")
          .classList.remove("d-none");
        return;
      }

      fullName = content.contactData.fullName;
      organisation = content.contactData.organisation;
      email = content.contactData.email;
      country = content.contactData.country;
      checkboxes = content.checkboxes;

      delete content.contactData.fullName;
      delete content.contactData.organisation;
      delete content.contactData.email;
      delete content.contactData.country;
      delete content.contactData.checkboxes;

      doLoadState = true;
      Object.assign(currentState, content);

      let response = await FILES;
      callBackForRequest(response);
    });
    reader.readAsText(file);
  });

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  const accessControls = $("#access-controls");

  const offset = Math.max(129, scroll);

  accessControls.offset({
    left: 150,
    top: offset,
  });

  if (scroll > 100) {
    if (!accessControls.hasClass("access-controls")) {
      accessControls.addClass("access-controls");
    }
  } else {
    accessControls.removeClass("access-controls");
  }
});
