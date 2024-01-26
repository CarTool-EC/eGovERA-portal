import "regenerator-runtime/runtime";

function customElement(elemName, classes, attributes) {
  classes = classes || [];
  attributes = attributes || {};
  const elem = document.createElement(elemName);

  for (let i = 0; i < classes.length; i++) {
    elem.classList.add(classes[i]);
  }

  for (let attribute in attributes) {
    elem.setAttribute(attribute, attributes[attribute]);
  }

  return elem;
}

function footer() {
  const sticyFooter = customElement("footer", ["sticky-footer", "bg-white"]);

  const container = customElement("div", [
    "container",
    "my-auto",
    "d-flex",
    "justify-content-between",
  ]);

  const copyright = customElement("div", [
    "copyright",
    "text-center",
    "my-auto",
  ]);

  const copyrightContainer = customElement("div");
  copyrightContainer.innerHTML = "Copyright &copy; European Commission 2024";

  const fileContainer = customElement("div");
  const fileLink = customElement("a", [], {
    href: "../copyright/ISA Product License v1 3.pdf",
    download: "ISA Product License v1 3.pdf",
  });

  fileLink.innerText = "ISA Product License v1.4";

  fileContainer.appendChild(fileLink);

  sticyFooter.appendChild(container);
  container.appendChild(copyright);
  container.appendChild(fileContainer);
  copyright.appendChild(copyrightContainer);
  document.getElementById("footer").appendChild(sticyFooter);
}

footer();

function sideNavBar() {
  let idToaddElements = "accordionSidebar";

  const unorderList = document.getElementById(idToaddElements);

  const sidebarBrand = customElement(
    "a",
    ["sidebar-brand", "d-flex", "align-items-center"],
    {
      href: "../instructions.html",
      style: "position: relative;",
    }
  );

  unorderList.appendChild(sidebarBrand);
  window.addEventListener("scroll", function () {
    sidebarBrand.style.top = window.pageYOffset + "px";
  });

  const sidebarDiv = customElement("div", ["sidebar-brand-icon"]);

  sidebarBrand.appendChild(sidebarDiv);

  const faLandMark = customElement("i", ["fas", "fa-landmark"], {
    style: "padding-left: 20px;",
   
  });

  sidebarDiv.appendChild(faLandMark);

  
  const lowerCaseDiv = customElement(
    "div",
    ["sidebar-brand-text", "text-lowercase"],
    {
      style: "font-size: 20px;padding-left: 13px",
    }
  );

  const lowerCaseLabel = document.createTextNode("e");

  lowerCaseDiv.appendChild(lowerCaseLabel);
  sidebarBrand.appendChild(lowerCaseDiv);

  const capitalizeDiv = customElement(
    "div",
    ["sidebar-brand-text", "text-capitalize"],
    {
      style: "font-size: 20px;",
    }
  );

  const capitalizeLabel = document.createTextNode("GovERA");

  capitalizeDiv.appendChild(capitalizeLabel);
  sidebarBrand.appendChild(capitalizeDiv);

  const instructionsLi = customElement("li", ["nav-item"], {
    id: "nav-item-1",
    style: "position: relative;",
  });

  const instructionsLink = customElement("a", ["nav-link"], {
    href: "../instructions.html",
  });

  instructionsLi.appendChild(instructionsLink);

  const instructionsIcon = customElement("i", ["fas", "fa-info-circle"]);

  instructionsLink.appendChild(instructionsIcon);

  const sidebarBrandText = customElement("a", ["sidebar-brand-pageText"],{style:"font-size: .65rem; padding-left 13px; color:white; text-align:center;position: relative;"});
  sidebarBrandText.innerHTML = "eGovERA Upscale Solution";
  unorderList.appendChild(sidebarBrandText);
  window.addEventListener("scroll", function () {
    sidebarBrandText.style.top = window.pageYOffset + "px";
  });


  const instructionsSpan = customElement("span");
  const instructionsSpanText = document.createTextNode("Overview & Guidelines");

  instructionsSpan.appendChild(instructionsSpanText);
  instructionsLink.appendChild(instructionsSpan);

  unorderList.appendChild(instructionsLi);
  window.addEventListener("scroll", function () {
    instructionsLi.style.top = window.pageYOffset + "px";
  });


 

  const instructionsDivider = customElement("hr", ["sidebar-divider"], {
    style: "position: relative;",
  });
  
  unorderList.appendChild(instructionsDivider);
  
  window.addEventListener("scroll", function () {
    instructionsDivider.style.top = window.pageYOffset + "px";
  });

  const headingDiv = customElement("div", ["sidebar-heading"]);
  // const headingText = document.createTextNode("Steps to follow");
  // headingDiv.appendChild(headingText);

  unorderList.appendChild(headingDiv);

  window.addEventListener("scroll", function () {
    headingDiv.style.top = window.pageYOffset + "px";
  });

  const capabilityAssessmentLi = customElement("li", ["nav-item"], {
    id: "nav-item-2",
    style: "position: relative;",
  });
  const capabilityAssessmentLink = customElement("a", ["nav-link"], {
    href: "../survey/survey.html",
  });
  const capabilityAssessmentIcon = customElement("i", [
    "fas",
    "fa-clipboard-list",
  ]);
  const capabilityAssessmentSpan = customElement("span");
  const capabilityAssessmentSpanText = document.createTextNode(
    "1. Capability assessment"
  );
  
  capabilityAssessmentLi.appendChild(capabilityAssessmentLink);
  capabilityAssessmentLink.appendChild(capabilityAssessmentIcon);
  capabilityAssessmentLink.appendChild(capabilityAssessmentSpan);
  capabilityAssessmentSpan.appendChild(capabilityAssessmentSpanText);
  unorderList.appendChild(capabilityAssessmentLi);
  
  window.addEventListener("scroll", function () {
    capabilityAssessmentLi.style.top = window.pageYOffset + "px";
  });

  const decisionSupportLi = customElement("li", ["nav-item"], {
    id: "nav-item-3",
    style: "position: relative;",
  });
  const decisionSupportLink = customElement("a", ["nav-link"], {
    href: "../roadmap/roadmaptest.html",
  });
  const decisionSupportIcon = customElement("i", ["fas", "fa-map"]);
  const decisionSupportSpan = customElement("span");
  const decisionSupportSpanText = document.createTextNode(
    "2. Decision Support"
  );

  decisionSupportSpan.appendChild(decisionSupportSpanText);

  decisionSupportLi.appendChild(decisionSupportLink);
  decisionSupportLink.appendChild(decisionSupportIcon);
  decisionSupportLink.appendChild(decisionSupportSpan);

  unorderList.appendChild(decisionSupportLi);

  window.addEventListener("scroll", function () {
    decisionSupportLi.style.top = window.pageYOffset + "px";
  });

  if (sessionStorage.getItem("role") === "admin") {
    const backOfficeLi = customElement("li", ["nav-item"], {
      id: "nav-item-4",
      style: "position: relative;",
    });
  
    unorderList.appendChild(backOfficeLi);
  
    window.addEventListener("scroll", function () {
      backOfficeLi.style.top = window.pageYOffset + "px";
    });
  
    const backOfficeLink = customElement("a", ["nav-link"], {
      href: "../backoffice/backOffice.html",
    });
    const backOfficeIcon = customElement("i", ["fas", "fa-user-shield"]);
    const backOfficeSpan = customElement("span");
    const backOfficeSpanText = document.createTextNode("3. Back Office");
  
    backOfficeSpan.appendChild(backOfficeSpanText);
  
    backOfficeLi.appendChild(backOfficeLink);
    backOfficeLink.appendChild(backOfficeIcon);
    backOfficeLink.appendChild(backOfficeSpan);
    
    unorderList.appendChild(backOfficeLi);

  }
  const backOfficeDiveder = customElement("hr", ["sidebar-divider"]);

  unorderList.appendChild(backOfficeDiveder);

  const togglerDiv = customElement("div", [
    "text-center",
    "d-none",
    "d-md-inline",
  ]);

  // const togglerBtn = customElement("button", ["rounded-circle", "border-0"], {
  //   id: "sidebarToggle",
  //   "data-target": "#accordionSidebar",
  // });

  //togglerDiv.appendChild(togglerBtn);
  unorderList.appendChild(togglerDiv);

  const url = location.href;
  const aTagsNodeList = unorderList.querySelectorAll("a[href]");

  for (let i = 0; i < aTagsNodeList.length; i++) {
    const element = aTagsNodeList[i];
    element.addEventListener("click", () => {
      sessionStorage.setItem("nav-link", element.parentElement.id);
    });

    let href = element.getAttribute("href");
    href = href.split("../")[1];
    if (url.indexOf(href) > -1) {
      if (href === "404.html") {
        if (element.parentElement.id === sessionStorage.getItem("nav-link"))
          element.parentElement.classList.add("active");
      } else element.parentElement.classList.add("active");
    } else {
    }
  }
  
 
  


}

sideNavBar();
