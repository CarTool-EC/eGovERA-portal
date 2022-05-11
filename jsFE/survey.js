import "regenerator-runtime/runtime";

import FILES from "./requestSurvey";

let converter = new showdown.Converter();
let resultsToSave = {};
let currentState = {};
let doLoadState = false;

let checkboxes = {};

let fullName;
let organisation;
let email;
let country;
let selectedBC = {};

const buttonTitles = [];

const pubValueTooltip = `It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the digital business capability. (*) default is the highest possible prospective ability`;

const budgetTooltip = `It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the digital business capability`;

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
      buttons[i].disabled = true;
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
  const { cells } = visibleRow;
  for (let idx = 0; idx < cells.length; idx++) {
    cells[idx].question.isRequired = reqState;
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

const getIDFromGeneratedQuestion = (question) => {
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

  if (!isFirstPage) {
    if (isAllBcSelected(bcBodyTag)) {
      toggleAllElementsState(page, true);
      toggleVisibility(page, true);
    } else {
      toggleAllElementsState(page, false);
      toggleVisibility(page, false);
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
    ".sv_row:not(:last-child) .btn.btn-default.btn-secondary.active"
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

  const avg = totalCalcAbbAvg();

  let newElement = $(`
  <div class="custom-row pt-2 pb-4 px-3">
    <p class="custom-avg-p">
    The overall assessed ability to support the digital business capability "${
      bcName.title
    }" is:
      <input class="custom-avg-input" id="total-avg-input" type="text" value="${avg.toFixed(
        2
      )}" disabled />
    out of 10
    </p>
  </div>
  `);

  lastRow.before(newElement);

  $(".sv_row:not(:last-child) .btn.btn-default.btn-secondary").on(
    "click",
    "input",
    function () {
      $(this).parent().addClass("active");
      $(this).parent().prevAll().removeClass("active");
      $(this).parent().nextAll().removeClass("active");
      const avg = totalCalcAbbAvg();
      $("#total-avg-input").val(avg.toFixed(2));
    }
  );
};

const calcAvgForView = (idx) => {
  let $activeLabels = $(
    `.sv_row:nth-of-type(${idx + 1}) .btn.btn-default.btn-secondary.active`
  );
  let values = $activeLabels
    .map(function () {
      return +$(this).find("input").val();
    })
    .get();

  let avg = values.reduce((sum, currVal) => (sum += currVal), 0);
  let length = values.length;

  if (!length) return 0;

  return avg / length;
};

const createAvgElement = (bcName, view, idx) => {
  let avg = calcAvgForView(idx);
  let newElement = $(`
  <div class="custom-row pt-2 pb-4 px-3">
    <p class="custom-avg-p">
    The overall assessed ability to support the digital business capability "${bcName}" ${view} requirements is:
      <input class="custom-avg-input" id="custom-avg-input-${idx}" type="text" value="${avg.toFixed(
    2
  )}" disabled />
    out of 10
    </p>
  </div>
  `);
  $(".sv_row").eq(idx).append(newElement);
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
    });
};

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

  let title = surveys[idx].title;
  let pages = surveys[idx].pages;

  var surveyJSON = { title: title, pages: pages, showTitle: false };

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

  survey.onAfterRenderPage.add(function (sender, options) {
    updateNavigation(options.page.visibleIndex);

    updateButtonsClickAbility(options.page.visibleIndex);

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

        totalAvgAbbElement(activeButtonTitles[options.page.visibleIndex - 1]);
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

  survey.onValidatedErrorsOnCurrentPage.add(function (survey, options) {
    let pageHasErros = options.errors.length !== 0;
    let windowHeight = $(window).height();
    if (!pageHasErros) return;

    const { questions } = options;
    const { questions: allQuestions } = survey.currentPage;

    allQuestions.forEach((question) => {
      const { id } = question;
      $(`#${id}-custom-alert`).remove();
    });

    questions.forEach((option) => {
      const $error = $("<div></div>")
        .addClass("alert alert-danger")
        .attr("id", `${option.id}-custom-alert`)
        .text("Please answer the question");

      $(`#${option.id}`).before($error);
    });

    $("#access-controls .spinner-border").addClass("d-none");
    $("html, body").animate(
      {
        scrollTop:
          $(".sv_qstn .has-error").first().offset().top - windowHeight / 2,
      },
      800
    );
  });

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
    onComplete: saveResultToFile,
    css: myCss,
  });
  survey.onCurrentPageChanging.add(function (sender, options) {
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
    animate("slideDown", 400);
    setTimeout(() => {
      updateProgressBar();
      $surveyLoadingModal.modal("hide");
    }, 400);
  });

  const illustrativeExample = (category) => {
    const examples = {
      Legal: `
      <b>Requirement:</b> BAABB6) [legal:European Legal Act] - Directive (EU) 2016/2102 of the European Parliament and of the Council of 26 October
      2016 on the accessibility of the websites and mobile applications of public sector bodies.<br />
      <b>Question:</b> To what extent the requirement is met by the As-Is Digital Business Capability? (scale from 1 to 10).<br />
      <b>Answer:</b>You should indicate the extent the mentioned requirement has been implemented, on a scale from 1 to 10, where 1 is the lowest score (e.g., no adherence to the EU Directive) and 10 the maximum score (e.g., fully adherence to the EU Directive). <br />
      `,
      Organisational: `
      <b>Requirement:</b> BAABB51) [organisational:Business Information] - Log<br />
      <b>Question:</b> To what extent the requirement is met by the As-Is Digital Business Capability? (scale from 1 to 10).<br />
      <b>Answer:</b> you should indicate the extent the mentioned requirement has been implemented, on a scale from 1 to 10, where 1 is the lowest score (e.g., paper-based log information tracker) and 10 the maximum score (e.g., advanced digital log information tracker).<br />
      `,
      Semantic: `
      <b>Requirement:</b> BAABB198) [Semantic:Data Set] - Data Set Catalogue<br />
      <b>Question:</b> To what extent the requirement is met by the As-Is Digital Business Capability? (scale from 1 to 10). <br />
      <b>Answer:</b> you should indicate the extent the mentioned requirement has been implemented, on a scale from 1 to 10, where 1 is the lowest score (e.g., no data set catalogue implemented) and 10 the maximum score (e.g., full structured data set catalogue implemented).<br />
      `,
      "Technical view application": `
      <b>Requirement:</b> BAABB198) [technical view-application:Interfaces] - Enterprise service bus <br />
      <b>Question:</b> To what extent the requirement is met by the As-Is Digital Business Capability? (scale from 1 to 10). <br />
      <b>Answer:</b> you should indicate the extent the mentioned requirement has been implemented, on a scale from 1 to 10, where 1 is the lowest score (e.g., no enterprise service bus implemented) and 10 the maximum score
       (e.g., lightweight and high-performance Enterprise Service Bus). <br />
      `,
      "Technical view infrastructure": `
      <b>Requirement:</b> BAABB198) [technical view-infrastructure:Hosting and Networking Infrastructure] - Hosting Service <br />
      <b>Question:</b> To what extent the requirement is met by the As-Is Digital Business Capability? (scale from 1 to 10). <br />
      <b>Answer:</b> you should indicate the extent the mentioned requirement has been implemented, on a scale from 1 to 10, where 1 is the lowest score (e.g., no hosting service implemented) and 10 the maximum score (e.g., high availability and high performance Hosting Service). <br />
      `,
    };
    const $container = $("<div></div>");

    const $title = $("<p><u><i>Illustrative Example:</u></i></p>");
    const $text = $(`<div>
    ${examples[category]}
    </div>`);

    $container.append($title);
    $container.append($text);
    return $container;
  };

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
      $(`#${parentID} table`).before(illustrativeExample(category));
    } catch (e) {}

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
    $(options.htmlElement).prepend($text);
  });

  createSaveWorkButton(survey);
  createPreviousSurvey(surveys, survey, idx);

  /**
   * Funtiality that will execute if this survey is the last of all surveys ( which is based on policies)
   */
  function completeLastSurvey(sender, options) {
    if (!doAnimantion) return;
    convertResults(survey);
    options.allowComplete = false;
    setTimeout(function () {
      doAnimantion = false;
      sender.doComplete();
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
function setupNavigationBar(survey, idx) {
  const options = [...buttonTitles[idx]];
  const selector = document.getElementById("pageSelector");
  selector.innerHTML = "";

  options.unshift({ id: 0, title: "Digital Business Capabilities Overview" });

  const length = options.length;

  for (let i = 0; i < length; i++) {
    let option = document.createElement("button");

    option.addEventListener("click", function () {
      survey.currentPageNo = i;
      $("#access-controls .spinner-border").removeClass("d-none");
    });

    option.setAttribute("dBusCap-id", options[i].id);

    option.innerHTML = options[i].title;
    option.classList.add("progress-bar-buttons");

    if (i === 0) option.classList.add("progress-bar-buttons-active");

    selector.appendChild(option);
  }

  updateButtonsClickAbility(0);
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
    if (index <= idx) option.classList.add("progress-bar-divs-active");
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
const bbFormaterFunc = (bb) => {
  return `<div><b>Requirement</b></div><p>${bb.id}) [${bb.view}:${bbLinks(
    bb.area
  )}] - <b>${bb.abb}</b><br><p style="font-size:13px;"<i>${
    bb.description
  }</p><p>`;

  //return `<div><b>Requirement</b></div><p>${bb.id}) [${bb.view}:${bb.area}] - <b>${bb.abb}</b><br><p style="font-size:13px;"<i>${bb.description}</p><p>`;
};

/**
 * Preparing the question for the survey
 */
function createSurvey(response) {
  let test = response;

  selectedBC = Object.keys(test).reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: true,
    };
  }, {});

  let dBusCaps = groupBy(Object.values(test), "policy");

  const pagePreperation = {};
  for (let policy in dBusCaps) {
    pagePreperation[policy] = pagePreperation[policy] || {};

    dBusCaps[policy].forEach((question) => {
      let abbs = groupBy(question.abbs, "view");
      let formattedQuestion = bcFormaterFunc(question);
      pagePreperation[policy][formattedQuestion] = {};
      for (let view in abbs) {
        let abb = abbs[view];
        pagePreperation[policy][formattedQuestion][view] =
          pagePreperation[policy][formattedQuestion][view] || [];

        abb.forEach((abbQuestion) => {
          let formattedAbbQuestion = bbFormaterFunc(abbQuestion);
          pagePreperation[policy][formattedQuestion][view].push(
            formattedAbbQuestion
          );
        });
      }
    });
  }
  let surveys = [];
  let surveyTitles = [];

  for (let policy in pagePreperation) {
    if (!checkboxes[policy]) continue;
    let pages = [];
    surveyTitles.push(capitalize(policy));
    let firstPage = [];
    let bcTitles = [];
    for (let question in pagePreperation[policy]) {
      firstPage.push(question);
      let startBTag = question.indexOf("<b>");
      let endBTag = question.indexOf("</b>");
      let q = question.slice(startBTag + 3, endBTag);
      let id = getIDFromGeneratedQuestion(question);
      bcTitles.push({
        id,
        title: q,
        active: true,
      });
      pages.push(
        surveyPages("testing page", [question], {
          question: q,
          ...pagePreperation[policy][question],
        })
      );
    }
    buttonTitles.push(bcTitles);
    pages.unshift(surveyFirstPage("Business Capabilites", firstPage, policy));
    surveys.push(pages);
  }

  let finalSurveysV2 = [];

  surveyTitles.forEach((surveyTitle, idx) => {
    let pages = surveys[idx];
    let obj = {
      title: surveyTitle,
      pages: pages,
    };
    finalSurveysV2.push(obj);
  });

  surveyRelated(finalSurveysV2);
}

function updateProgressBar() {
  const progressWidth = $(".progress-bar-buttons-active")
    .map((idx, elem) => {
      if (idx === 0) return $(elem).outerWidth();
      return $(elem).outerWidth() + 10;
    })
    .get()
    .reduce((width, newWidth) => (width += newWidth), 0);

  $(".progress-bar").css({ width: `${progressWidth}px` });
}

function updateNavigation(idx) {
  const options = document.querySelectorAll(
    ".progress-bar-buttons:not(.d-none)"
  );

  for (let i = 0; i < options.length; i++) {
    if (i <= idx) {
      options[i].classList.add("progress-bar-buttons-active");
      continue;
    }
    options[i].classList.remove("progress-bar-buttons-active");
  }
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
  let res = {
    [title]: {
      currentPageNo: survey.currentPageNo,
      data: survey.data,
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
  saveStateMiddleware(survey);

  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(currentState, null, 2)], {
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
function createSaveWorkButton(survey) {
  const footer = document.querySelector(".panel-footer");

  const saveWorkBtn = document.createElement("button");
  const saveLabel = document.createTextNode("Save work");
  saveWorkBtn.appendChild(saveLabel);
  saveWorkBtn.className = "btn btn-primary";
  saveWorkBtn.setAttribute("id", "save-work-btn");
  saveWorkBtn.addEventListener("click", function () {
    saveState(survey);
  });

  const nextBtn = document.querySelector(".panel-footer .sv_next_btn");
  footer.insertBefore(saveWorkBtn, nextBtn);
}

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
  let results = survey.data;
  let returnData = {};
  returnData[survey.title] = returnData[survey.title] || {};

  let BCS = {};
  let BBS = {};
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
    let id = getIDFromGeneratedQuestionForBB(bb).trim();
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
}

const getIDFromGeneratedQuestionForBB = (bb) => {
  const newBB = bb.replace("<div><b>Requirement</b></div><p>", "");
  return getIDFromGeneratedQuestion(newBB);
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

/**
 *
 * Functionality to create the file and prompts to the user for saving the result file
 */
function saveResultToFile(survey) {
  const a = document.createElement("a");

  saveSelectedBCs();
  removeUnSelectedBCes();
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(resultsToSave, null, 2)], {
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
      )}</b>  requirements is met by this digital business capability? (1 not at all, 10 full fulfilment)
      </span>`,
    isRequired: true,
    columnMinWidth: "390px",
    columns: [
      {
        name: "Ability to support the dBusCap",
        title: `<span style="display: none;">Ability to support the dBusCap </span>`,
        cellType: "rating",
        isRequired: true,
        rateValues: range(1, 10),
      },
    ],
    choices: range(1, 10),
    cellType: "rating",
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
  const bc = {
    type: "matrixdropdown",
    name: "Business Capabilities BC",
    title: `Please, indicate the Expected Public Value and Estimated budget to this digital business capability`,
    tooltip:
      "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
    isRequired: true,
    columnMinWidth: "260px",
    columns: [
      {
        name: "Expected Public Value",
        title: `<span>Expected Public Value </span><span data-toggle="tooltip" data-html="true" title="${pubValueTooltip}">  <i class="fa fa-question-circle text-primary"></i></span>`,
        cellType: "rating",
        isRequired: true,
        rateValues: range(1, 5),
      },
      {
        name: "budget",
        title: `<span>Estimated budget (in millions EUR)</span><span data-toggle="tooltip" data-html="true" title="${budgetTooltip}">  <i class="fa fa-question-circle text-primary"></i></span>`,
        cellType: "number",
        isRequired: true,
      },
    ],
    choices: range(1, 5),
    cellType: "rating",
    rows: bcList,
  };
  template.elements.push(bc);

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
          "Please indicate the value for each selected National Digital Strategic Fit for each digital business capability (1 lower,  5 highest)",
        tooltip:
          "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
        isRequired: true,
        columnMinWidth: "260px",
        columns: [
          {
            name: "National Digital Strategy Fit",
            title,
            cellType: "rating",
            isRequired: true,
            rateValues: range(1, 5),
          },
        ],
        choices: range(1, 5),
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

      if (
        !content.fullName ||
        !content.organisation ||
        !content.email ||
        !content.country ||
        !content.checkboxes
      ) {
        document.querySelector(".spinner-border").classList.add("d-none");
        document
          .querySelector("#previous-work-error")
          .classList.remove("d-none");
        return;
      }

      fullName = content.fullName;
      organisation = content.organisation;
      email = content.email;
      country = content.country;

      checkboxes = content.checkboxes;

      delete content.fullName;
      delete content.organisation;
      delete content.email;
      delete content.country;
      delete content.checkboxes;

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

$(window).on("resize", updateProgressBar);
