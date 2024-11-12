// JavaScript Code

import { data } from "./data.js";

const drawerButton = document.querySelector(".sidebar__drawer-button");
const chevron = document.querySelector(".sidebar__drawer-button-icon");

const sidebar = document.querySelector(".sidebar");
const sidebarList = document.querySelector(".sidebar__list");
const search = document.querySelector(".page-header__search");
const canvas = document.querySelector(".component-details__canvas");
const resultsBox = document.querySelector(".component-details__results");
const logo = document.querySelector(".page-header__logo");
let initilized = false;

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
  const componentDetails = document.createElement("div");
  componentDetails.classList.add("component-details__component");
  canvas.appendChild(componentDetails);

  const componentTitle = document.createElement("h3");
  componentTitle.classList.add("component-details__component-title");
  componentTitle.textContent = component.component;
  componentDetails.appendChild(componentTitle);

  const componentDescription = document.createElement("p");
  componentDescription.classList.add("component-details__description");
  componentDescription.textContent = component.description;
  componentDetails.appendChild(componentDescription);

  component.types.forEach((type) => {
    const typeContainer = document.createElement("div");
    typeContainer.classList.add("component-details__type");
    componentDetails.appendChild(typeContainer);

    const typeTitle = document.createElement("h4");
    typeTitle.classList.add("component-details__type-title");
    typeTitle.textContent = type.type;
    typeContainer.appendChild(typeTitle);

    const typeDescription = document.createElement("p");
    typeDescription.classList.add("component-details__type-description");
    typeDescription.textContent = type.description;
    typeContainer.appendChild(typeDescription);

    const typeCode = document.createElement("code");
    typeCode.classList.add("component-details__type-code");
    typeCode.textContent = type.code;
    typeContainer.appendChild(typeCode);
  });
};

const showComponentDetails = (event) => {
  let id = event.currentTarget.id;

  console.log(event);
  data[0].data.forEach((component) => {
    if (component.id === id) {
      createComponentDetails(component);
    }
  });
};

const createSubListItems = (parent, data) => {
  const subListItem = document.createElement("li");
  subListItem.classList.add("sidebar__subitem");
  subListItem.id = data.id;
  subListItem.textContent = data.component;
  subListItem.addEventListener("click", showComponentDetails);
  parent.appendChild(subListItem);
};

const createListItem = (item) => {
  console.log(item);
  const listItem = document.createElement("li");
  listItem.classList.add("sidebar__item");
  sidebarList.appendChild(listItem);

  const titleGroup = document.createElement("div");
  titleGroup.classList.add("sidebar__title-group");
  listItem.appendChild(titleGroup);

  const itemTitle = document.createElement("h3");
  itemTitle.classList.add("sidebar__title");
  itemTitle.textContent = item.title;
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
  });

  subList.style.height = `${subList.scrollHeight}px`;
  titleGroup.addEventListener("click", collapseComponents);
};

const initilizeDOM = () => {
  data.forEach((item) => {
    if (!initilized) {
      createListItem(item);
    }
    item.data.forEach((element) => {
      const component = document.createElement("div");
      component.classList.add("component-details__component");
      component.id = element.id;
      component.addEventListener("click", showComponentDetails);
      canvas.appendChild(component);

      const componentTitle = document.createElement("h3");
      componentTitle.classList.add("component-details__title");
      componentTitle.textContent = element.component;
      component.appendChild(componentTitle);

      const componentDescription = document.createElement("p");
      componentDescription.classList.add("component-details__description");
      componentDescription.textContent = element.description;
      component.appendChild(componentDescription);
    });
  });
  initilized = true;
};

const reinitilizaDOM = () => {
  canvas.innerHTML = "";
  initilizeDOM();
};

logo.addEventListener("click", reinitilizaDOM);

const triggerDrawer = () => {
  sidebar.classList.toggle("sidebar--retracted");
  chevron.classList.toggle("sidebar__drawer-button-icon--rotated");
};

const onUnfocusSearch = () => {
  setTimeout(() => {
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
      item.components.forEach((component) => {
        if (component.component.toLowerCase().includes(input)) {
          results.push(component);
        }
      });
    });
  }

  resultsBox.innerHTML = "";
  results.forEach((result) => {
    const resultsItem = document.createElement("div");
    resultsItem.classList.add("component-details__result-item");
    resultsItem.id = result.id;

    resultsItem.addEventListener("click", showComponentDetails);
    resultsBox.appendChild(resultsItem);

    const resultsTitle = document.createElement("h3");
    resultsTitle.classList.add("component-details__result-title");
    resultsTitle.textContent = result.data;
    resultsItem.appendChild(resultsTitle);
  });
};

search.addEventListener("input", (e) => {
  let value = e.target.value;
  performSearch(value);
});

initilizeDOM();
