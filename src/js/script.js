// JavaScript Code

import { data } from "./data.js";

const elementsDOM = {
  drawerButton: document.querySelector(".sidebar__drawer-button"),
  chevron: document.querySelector(".sidebar__drawer-button-icon"),
  sidebar: document.querySelector(".sidebar"),
  sidebarList: document.querySelector(".sidebar__list"),
  search: document.querySelector(".page-header__search"),
  resultsBox: document.querySelector(".page-header__search-results"),
  logo: document.querySelector(".page-header__logo"),
  canvas: document.querySelector(".component-details"),
  details: document.querySelector(".component-details"),
};

let initialized = false;

// INITIAL RENDER
window.addEventListener("DOMContentLoaded", () => {
  initializeDOM();
  logo.addEventListener("click", reinitializeDOM);
  search.addEventListener("blur", onUnfocusSearch);
  drawerButton.addEventListener("click", triggerDrawer);
});

const {
  drawerButton,
  chevron,
  sidebar,
  sidebarList,
  search,
  resultsBox,
  logo,
  canvas,
  details,
} = elementsDOM;

const createTextElement = (tag, className, text) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerText = text;
  return element;
};

const createDivElement = (className) => {
  const element = document.createElement("div");
  element.classList.add(className);
  return element;
};

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
  canvas.innerText = "";
  const componentDetails = createDivElement(
    "component-details__component-details"
  );

  canvas.append(componentDetails);

  const componentTitle = createTextElement(
    "h3",
    "component-details__component-title",
    component.component
  );
  const componentDescription = createTextElement(
    "p",
    "component-details__description",
    component.description
  );
  componentDetails.append(componentTitle, componentDescription);

  let codeGenerated = false; 
  component.types.forEach((type) => {
    const typeContainer = document.createElement("div");
    typeContainer.classList.add("component-details__type");
    componentDetails.append(typeContainer);

    const typeTitle = createTextElement(
      "h4",
      "component-details__type-title",
      type.type
    );
    const typeDescription = createTextElement(
      "p",
      "component-details__type-description",
      type.description
    );
    typeContainer.append(typeTitle, typeDescription)
    if (!codeGenerated) {
      codeGenerated = true;
      const preformatted = document.createElement("pre");
      preformatted.classList.add("component-details__preformatted");

      const typeCode = document.createElement("code");
      typeCode.classList.add("component-details__type-code");

      typeCode.textContent = type.code;
      preformatted.append(typeCode);
      typeContainer.append(preformatted)
    }

    const demoContainer = createDivElement("component-details__demo-container");
    typeContainer.append(demoContainer);

    typeContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal__button")) {
        const modal = document.querySelector(".modal");
        modal.classList.toggle("modal--hidden");
      }
    });
    const code = type.code;
    const block = component.block;

    type.sizes.forEach((size) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(code, 'text/html');
      const element = doc.body.firstElementChild;
      
      element.classList.add(`${block}--${size}`);
      demoContainer.appendChild(element);
    });
  });
};

const showComponentDetails = (target, dataParent) => {
  const id = target.dataset.id;

  data[dataParent].data.forEach((component) => {
    if (component.id === id) {
      createComponentDetails(component);
    }
  });
};

const createSubListItems = (parent, data, dataParent) => {
  const subListItem = document.createElement("li");
  subListItem.classList.add("sidebar__subitem");
  subListItem.dataset.id = data.id;
  subListItem.dataset.parent = dataParent;
  subListItem.textContent = data.component;
  parent.append(subListItem);
};

const createListItem = (item, index) => {
  const listItem = document.createElement("li");
  listItem.classList.add("sidebar__item");
  sidebarList.append(listItem);

  const titleGroup = document.createElement("div");
  titleGroup.classList.add("sidebar__title-group");

  const itemTitle = createTextElement("h3", "sidebar__title", item.title);

  const chevron = document.createElement("img");
  chevron.classList.add("sidebar__chevron");
  chevron.src = "./assets/icons/chevron-lsolid.svg";
  chevron.alt = "chevron";
  titleGroup.append(itemTitle, chevron);

  const subList = document.createElement("ul");
  subList.classList.add("sidebar__sublist");
  subList.classList.add("sidebar__sublist--open");

  listItem.append(titleGroup, subList);

  item.data.forEach((component) => {
    createSubListItems(subList, component, index);

    subList.addEventListener("click", (e) => {
      if (e.target.classList.contains("sidebar__subitem")) {
        const target = e.target;
        const dataParent = target.dataset.parent;
        showComponentDetails(target, dataParent);
      }
    });
  });

  subList.style.height = `${subList.scrollHeight}px`;
  titleGroup.addEventListener("click", collapseComponents);
};

const initializeDOM = () => {
  data.forEach((item, index) => {
    if (!initialized) {
      createListItem(item, index);
    }

    const canvas = document.createElement("div");
    canvas.classList.add("component-details__canvas");

    const title = createTextElement(
      "h2",
      "component-details__category",
      item.title
    );
    details.append(title, canvas);

    item.data.forEach((element) => {
      const component = document.createElement("div");
      component.classList.add("component-details__component");
      component.dataset.id = element.id;
      component.dataset.parent = index;
      component.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const dataParent = target.dataset.parent;
        showComponentDetails(target, dataParent);
      });

      canvas.append(component);

      const componentTitle = createTextElement(
        "h3",
        "component-details__title",
        element.component
      );
      const componentDescription = createTextElement(
        "p",
        "component-details__description",
        element.description
      );

      component.append(componentTitle, componentDescription);
    });
  });

  initialized = true;
};

const reinitializeDOM = () => {
  canvas.innerHTML = "";
  initializeDOM();
};

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
