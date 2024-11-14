// JavaScript Code

import { data } from "./data.js";

const drawerButton = document.querySelector(".sidebar__drawer-button");
const chevron = document.querySelector(".sidebar__drawer-button-icon");
const sidebar = document.querySelector(".sidebar");
const sidebarList = document.querySelector(".sidebar__list");
const search = document.querySelector(".page-header__search");
const canvas = document.querySelector(".component-details__canvas");
const resultsBox = document.querySelector(".page-header__search-results");
const logo = document.querySelector(".page-header__logo");
let initialized = false;

const createTextElement = (tag, className, text) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerText = text;
  return element;
}

const createDivElement = (className) => {
  const element = document.createElement("div");
  element.classList.add(className);
  return element; 
}

const collapseComponents = (e) => {
  let children = e.currentTarget.children;
  let subListTarget = e.currentTarget.nextSibling;
  const openClass = "sidebar__sublist--open";

  for (let child of children) {
    if (child.classList.contains("sidebar__chevron")) {
      child.classList.toggle("sidebar__chevron--rotated");
    }
  }

  if (subListTarget.classList.contains(openClass)) {
    subListTarget.classList.toggle(openClass);
    subListTarget.style.height = "0px";
    return;
  } else {
    const scrollHeight = e.currentTarget.nextElementSibling.scrollHeight;
    subListTarget.style.height = `${scrollHeight}px`;
    subListTarget.classList.toggle("sidebar__sublist--open");
  }
};

const createComponentDetails = (component) => {
  canvas.innerHTML = "";
  const componentDetails = createDivElement("component-details__component");
  canvas.appendChild(componentDetails);

  const componentTitle = createTextElement("h3", "component-details__component-title", component.component);
  componentDetails.appendChild(componentTitle);

  const componentDescription = createTextElement("p", "component-details__description", component.description);
  componentDetails.appendChild(componentDescription);

  component.types.forEach((type) => {
    const typeContainer = document.createElement("div");
    typeContainer.classList.add("component-details__type");
    componentDetails.appendChild(typeContainer);

    const typeTitle = createTextElement("h4", "component-details__type-title", type.type);  
    typeContainer.appendChild(typeTitle);

    const typeDescription =createTextElement("p", "component-details__type-description", type.description);
    typeContainer.appendChild(typeDescription);

    const typeCode = document.createElement("code");
    typeCode.classList.add("component-details__type-code");
    typeCode.textContent = type.code;
    typeContainer.appendChild(typeCode);
  });
};

const showComponentDetails = (target) => {
  console.log(target);
  let id = target.dataset.id;
  console.log(id);

  data[0].data.forEach((component) => {
    if (component.id === id) {
      createComponentDetails(component);
    }
  });
};

const createSubListItems = (parent, data) => {
  const subListItem = document.createElement("li");
  subListItem.classList.add("sidebar__subitem");
  subListItem.dataset.id = data.id;
  subListItem.textContent = data.component;
  parent.appendChild(subListItem);
};

const createListItem = (item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("sidebar__item");
  sidebarList.appendChild(listItem);

  const titleGroup = document.createElement("div");
  titleGroup.classList.add("sidebar__title-group");
  listItem.appendChild(titleGroup);

  const itemTitle = createTextElement("h3", "sidebar__title", item.title);
  titleGroup.appendChild(itemTitle);

  const chevron = document.createElement("img");
  chevron.classList.add("sidebar__chevron");
  chevron.src = "./assets/icons/chevron-lsolid.svg";
  chevron.alt = "chevron";
  titleGroup.appendChild(chevron);

  const subList = document.createElement("ul");
  subList.classList.add("sidebar__sublist");
  subList.classList.add("sidebar__sublist--open");
  
  listItem.appendChild(subList);

  item.data.forEach((component) => {
    createSubListItems(subList, component);

    // Eventdelegation for subitems in the sublist to show component details when clicked on them
    subList.addEventListener("click", (e) => {
      if (e.target.classList.contains("sidebar__subitem")) {
        let target = e.target;
        showComponentDetails(target);
      }
    });
  });

  subList.style.height = `${subList.scrollHeight}px`;
  titleGroup.addEventListener("click", collapseComponents);
};

const initializeDOM = () => {
  data.forEach((item) => {
    if (!initialized) {
      createListItem(item);
    }
    item.data.forEach((element) => {
      const component = document.createElement("div");
      component.classList.add("component-details__component");
      component.dataset.id = element.id;
      component.addEventListener("click", (e)=>{
        let target = e.currentTarget;
        showComponentDetails(target)
      });
      canvas.appendChild(component);
     
      const componentTitle = createTextElement("h3", "component-details__title", element.component);
      component.appendChild(componentTitle);

      const componentDescription = createTextElement("p", "component-details__description", element.description);
      component.appendChild(componentDescription);
    });
  });
  initialized = true;
};

const reinitializeDOM = () => {
  canvas.innerHTML = "";
  initializeDOM();
};

logo.addEventListener("click", reinitializeDOM);

const triggerDrawer = () => {
  sidebar.classList.toggle("sidebar--retracted");
  chevron.classList.toggle("sidebar__drawer-button-icon--rotated");
};

const onUnfocusSearch = () => {
  setTimeout(() => {
    resultsBox.classList.remove("page-header__search-results--show");
    search.value = "";
    resultsBox.innerHTML = "";
  }, 200);
};

search.addEventListener("blur", onUnfocusSearch);
drawerButton.addEventListener("click", triggerDrawer);

const performSearch = (input) => {
  let results = [];

  if (input.length > 0) {
    data.forEach((item) => {
      item.data.forEach((component) => {
        if (component.component.toLowerCase().includes(input)) {
          results.push(component);
        }
      });
    });
  }

  resultsBox.innerHTML = "";
  resultsBox.classList.add("page-header__search-results--show");
  results.forEach((result) => {
    const resultsItem = document.createElement("div");
    resultsItem.classList.add("component-details__result-item");
    resultsItem.dataset.id = result.id;

    resultsItem.addEventListener("click", (e) => {
      let target = e.currentTarget;
      showComponentDetails(target);
    });
    resultsBox.appendChild(resultsItem);

    const resultsTitle = document.createElement("h3");
    resultsTitle.classList.add("component-details__result-title");
    resultsTitle.textContent = result.component;
    resultsItem.appendChild(resultsTitle);
  });
};

search.addEventListener("input", (e) => {
  let value = e.target.value;
  performSearch(value);
});

/* const searchOnEnter = (e) => {
  if (e.key === "Enter") {
  }
};

search.addEventListener("keypress", searchOnEnter); */

initializeDOM();



