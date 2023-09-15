import "regenerator-runtime/runtime";

/**
 *
 * @param {String} cssSelector
 * @param {String} text
 */
function setField(cssSelector, text) {
  document.querySelector(cssSelector).innerHTML = text;
}

async function printMetadada() {
  const defaultDBusCapsLabel = "<b>File Information:</b> ";
  const dBusCapsLabelSelector = "#all-in-one-file-div label";
  let metadata = { fileName: "", birthtime: "" };

  try {
    metadata = await fetch("/api/backoffice/metadata");
    metadata = await metadata.json();
  } catch (e) {
    console.error(e);
  } finally {
    setField(dBusCapsLabelSelector, defaultDBusCapsLabel);
    const nameText = `(Last file uploaded name: ${metadata.fileName} Last updated ${metadata.birthtime})`;

    setField(dBusCapsLabelSelector, defaultDBusCapsLabel + nameText);
  }
}
$(document).ready(function () {
  printMetadada();
});

const form = document.getElementById("form");

function formValidation() {
  let allInOneFile = document.getElementById("all-in-one-file").files[0];

  if (!allInOneFile) {
    const error = document.getElementById("error");
    error.classList.remove("d-none");
    return false;
  }
  return true;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!formValidation()) return;
  const errorParagrah = document.getElementById("error");
  errorParagrah.classList.add("d-none");

  let allInOneFile = document.getElementById("all-in-one-file").files[0];

  const formData = new FormData();
  formData.append("file", allInOneFile);

  const response = await fetch("/api/backoffice/upload_files", {
    method: "POST",
    body: formData,
  });
  const status = response.status;

  const responseObj = await response.json();

  const { message, error } = responseObj;

  const modal = createModal(error ? error : message);

  document.querySelector("body").appendChild(modal);

  jQuery(modal).modal("show");

  if (status === 200) {
    printMetadada();
  }
});

// function createModal() {
//   const modal = document.createElement("div");
//   modal.classList.add("modal", "fade");
//   modal.setAttribute("tabindex", "-1");
//   modal.setAttribute("id", "exampleModal");
//   modal.setAttribute("role", "dialog");
//   modal.setAttribute("aria-labelledby", "exampleModalLabel");

//   const modal_dialog = document.createElement("div");
//   modal_dialog.classList.add("modal-dialog");
//   modal_dialog.setAttribute("role", "document");

//   const modal_content = document.createElement("div");
//   modal_content.classList.add("modal-content");

//   const modal_body = document.createElement("div");
//   modal_body.classList.add("modal-body");

//   const paragraph = document.createElement("p");
//   paragraph.classList.add("information-section");
//   paragraph.innerHTML = `
//   <strong><em>Please indicate the National Digital Strategic Fit</em></strong> for each Digital Business Capabilities, taking into account the following instructions:
//   <br><br>
//   You are asked to prioritise all the Digital Business Capabilities for the selected policy domain, according to the National Digital Strategic Fit that you as a Member state assign to the specific Digital Business Capabilities.
//   <br><br>
//   You can choose between some Digital Business Capabilities and exclude any of them in the evaluation process. If one or more Digital Business Capabilities, do not play a strategic role in your national agenda, then their assessment might be skipped. To exclude any Digital Business Capability use the green button on the left side of the Digital Business Capabilities list.
//   <br><br>
//   <strong>Definitions:</strong>
//   <br>
//   <em>Digital Business Capabilities:</em> A particular digital ability or capacity that an organisation may possess or exchange to achieve a specific purpose or outcome.
//   <br>
//   <em>National Digital Strategy Fit:</em> It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.
//   <br><br>
//   <strong>*Score for the National Digital Strategic Fit parameter (1 lower, 5 highest):</strong>
//   <br>
//   <strong>very low priority</strong> (this Digital Business Capability will be considered in the future)
//   <br>
//   <strong>Low priority</strong> (this Digital Business Capability will be developed once the ones with medium priority are developed)
//   <br>
//   <strong>Medium priority</strong> (this Digital Business Capability will be developed once the ones with high priority are developed)
//   <br>
//   <strong>High priority</strong> (this Digital Business Capability will be developed once the ones with very high priority are developed)
//   <br>
//   <strong>Very high priority</strong> (this Digital Business Capability has the highest priority in the development)
//   <br>
//   <strong>Non Applicable:</strong> By selecting a requirements as "not applicable", they will not be considered in the overall assessed ability to support the digital business capability.
// `;
//   // const paragraphText = document.createTextNode(message);
//   // paragraph.appendChild(paragraphText);

//   const footer = document.createElement("div");
//   footer.classList.add("modal-footer");

//   const okBtn = document.createElement("button");
//   okBtn.setAttribute("type", "button");
//   okBtn.classList.add("btn", "btn-primary");
//   okBtn.setAttribute("data-dismiss", "modal");
//   const okLabel = document.createTextNode("Ok");
//   okBtn.appendChild(okLabel);

//   footer.appendChild(okBtn);
//   modal_body.appendChild(paragraph);

//   modal_content.appendChild(modal_body);
//   modal_content.appendChild(footer);
//   modal_dialog.appendChild(modal_content);
//   modal.appendChild(modal_dialog);

//   return modal;
// }

function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("id", "modalExample");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "modalExampleLabel");

  const modal_dialog = document.createElement("div");
  modal_dialog.classList.add("modal-dialog");
  modal_dialog.setAttribute("role", "document");

  const modal_content = document.createElement("div");
  modal_content.classList.add("modal-content");

  const modal_body = document.createElement("div");
  modal_body.classList.add("modal-body");

  const text = document.createElement("p");
  text.innerHTML = `
    <strong><em>Please indicate the National Digital Strategic Fit</em></strong> for each Digital Business Capabilities, taking into account the following instructions:
    <br><br>
    You are asked to prioritise all the Digital Business Capabilities for the selected policy domain, according to the National Digital Strategic Fit that you as a Member state assign to the specific Digital Business Capabilities.
    <br><br>
    You can choose between some Digital Business Capabilities and exclude any of them in the evaluation process. If one or more Digital Business Capabilities, do not play a strategic role in your national agenda, then their assessment might be skipped. To exclude any Digital Business Capability use the green button on the left side of the Digital Business Capabilities list.
    <br><br>
    <strong>Definitions:</strong>
    <br>
    <em>Digital Business Capabilities:</em> A particular digital ability or capacity that an organisation may possess or exchange to achieve a specific purpose or outcome.
    <br>
    <em>National Digital Strategy Fit:</em> It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.
    <br><br>
    <strong>*Score for the National Digital Strategic Fit parameter (1 lower, 5 highest):</strong>
    <br>
    <strong>very low priority</strong> (this Digital Business Capability will be considered in the future)
    <br>
    <strong>Low priority</strong> (this Digital Business Capability will be developed once the ones with medium priority are developed)
    <br>
    <strong>Medium priority</strong> (this Digital Business Capability will be developed once the ones with high priority are developed)
    <br>
    <strong>High priority</strong> (this Digital Business Capability will be developed once the ones with very high priority are developed)
    <br>
    <strong>Very high priority</strong> (this Digital Business Capability has the highest priority in the development)
    <br>
    <strong>Non Applicable:</strong> By selecting a requirements as "not applicable", they will not be considered in the overall assessed ability to support the digital business capability.
  `;

  const footer = document.createElement("div");
  footer.classList.add("modal-footer");

  const okBtn = document.createElement("button");
  okBtn.setAttribute("type", "button");
  okBtn.classList.add("btn", "btn-primary");
  okBtn.setAttribute("data-dismiss", "modal");
  const okLabel = document.createTextNode("Ok");
  okBtn.appendChild(okLabel);

  footer.appendChild(okBtn);
  modal_body.appendChild(text);

  modal_content.appendChild(modal_body);
  modal_content.appendChild(footer);
  modal_dialog.appendChild(modal_content);
  modal.appendChild(modal_dialog);

  return modal;
}


