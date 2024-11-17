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
  canvas.innerHTML = "";
  const componentDetails = createDivElement(
    "component-details__component-details"
  );

  canvas.appendChild(componentDetails);

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

  component.types.forEach((type) => {
    const typeContainer = document.createElement("div");
    typeContainer.classList.add("component-details__type");
    componentDetails.appendChild(typeContainer);

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
  
    const preformatted   = document.createElement("pre");
    const typeCode = document.createElement("code");
    typeCode.classList.add("component-details__type-code");
    typeCode.textContent = type.code;
    preformatted.appendChild(typeCode);

    typeContainer.append(typeTitle, typeDescription, preformatted); 

    
    const tag = type.tag;
    const className = type.class;
    const text = type.text;
    const options = type.options;

    if (tag) {
      const demoContainer = createDivElement(
        "component-details__demo-container"
      );
      typeContainer.appendChild(demoContainer);

      type.size.forEach((size) => {
        const displayComponent = createComponent(
          tag,
          className,
          text,
          size,
          options
        );
        demoContainer.appendChild(displayComponent);

      });
    }
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
  parent.appendChild(subListItem);
};

const createListItem = (item, index) => {
  const listItem = document.createElement("li");
  listItem.classList.add("sidebar__item");
  sidebarList.appendChild(listItem);

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

    // Eventdelegation for subitems in the sublist to show component details when clicked on them
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


    details.append(title,canvas);

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

      canvas.appendChild(component);

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

const createComponent = (tag, className, text, size, options) => {
  const element = document.createElement(tag);
  element.classList.add("component__demo", tag, className, size);
  element.innerText = text;
  if (options) {
    createOptions(element, options);
  }
  return element;
};

const createOptions = (select, options) => {
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    select.appendChild(optionElement);
  });
};

/* const performSearch = (input) => {
  let results = [];

  if (input.length > 0) {
    data.forEach((item, index) => {
      item.data.forEach((component) => {
        if (component.component.toLowerCase().includes(input)) {
          results.push(component);
        }
      });
    });
  

  resultsBox.innerHTML = "";
  resultsBox.classList.add("page-header__search-results--show");

  results.forEach((result) => {
    const resultsItem = document.createElement("div");
    resultsItem.classList.add("component-details__result-item");
    resultsItem.dataset.id = result.id;
    resultsItem.dataset.parent = index;

    resultsItem.addEventListener("click", (e) => {
      const target = e.currentTarget;

      showComponentDetails(target, dataParent);
    });

    resultsBox.appendChild(resultsItem);

    const resultsTitle = createTextElement("h3", "component-details__result-title", result.component);
    resultsItem.appendChild(resultsTitle);
  });
  }
};

search.addEventListener("input", (e) => {
  let value = e.target.value;
  performSearch(value);
}); */

/* const searchOnEnter = (e) => {
  if (e.key === "Enter") {
  }
};

search.addEventListener("keypress", searchOnEnter); */
