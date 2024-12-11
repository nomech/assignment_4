// JavaScript Code
//Import data from data.js file
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

// Ensure that the DOM is fully loaded before running the script
window.addEventListener("DOMContentLoaded", () => {
  initializeDOM();
  logo.addEventListener("click", reinitializeDOM);
  drawerButton.addEventListener("click", triggerDrawer);
});

// Destructure the elementsDOM object
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


// Function to create a text element
const createTextElement = (tag, className, text) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerText = text;
  return element;
};

// Function to create a div element
const createDivElement = (className) => {
  const element = document.createElement("div");
  element.classList.add(className);
  return element;
};


// Function to collapse the components in the sidebar
const collapseComponents = (e) => {
  let children = e.currentTarget.children;
  let subListTarget = e.currentTarget.nextSibling;
  const openClass = "sidebar__sublist--open";

  //Iterate over the children of the clicked element and add the rotated class to the chevron
  for (let child of children) {
    if (child.classList.contains("sidebar__chevron")) {
      child.classList.toggle("sidebar__chevron--rotated");
    }
  }

  //Check if the sublist is open and close it
  if (subListTarget.classList.contains(openClass)) {
    subListTarget.classList.toggle(openClass);
    subListTarget.style.height = "0px";
    return;

    //If the sublist is closed, open it
  } else {
    //Get the scroll height of the sublist and set the height to the scroll height
    const scrollHeight = e.currentTarget.nextElementSibling.scrollHeight;
    subListTarget.style.height = `${scrollHeight}px`;
    subListTarget.classList.toggle("sidebar__sublist--open");
  }
};

// Function to create the component details
const createComponentDetails = (component) => {
  canvas.innerText = "";

  // Create the component details container
  const componentDetails = createDivElement("component-details__details");
  canvas.append(componentDetails);

  // Create the component title
  const componentTitle = createTextElement("h3", "component-details__component-title", component.component);

  // Create the component description
  const componentDescription = createTextElement(
    "p",
    "component-details__description",
    component.description
  );
  componentDetails.append(componentTitle, componentDescription);

  // Create the component types
  let codeGenerated = false; 

  // Loop through the types of the component
  component.types.forEach((type) => {
    const typeContainer = document.createElement("div");
    typeContainer.classList.add("component-details__type");
    componentDetails.append(typeContainer);

    // Create the type title and description
    const typeTitle = createTextElement("h4", "component-details__type-title", type.type);

    // Create the type description
    const typeDescription = createTextElement("p", "component-details__type-description", type.description);
    typeContainer.append(typeTitle, typeDescription)
    
    // Create the preformatted code block if it has not been generated
    if (!codeGenerated) {
      codeGenerated = true;

      // Create the preformatted code block
      const preformatted = document.createElement("pre");
      preformatted.classList.add("component-details__preformatted");

      // Create the code element
      const typeCode = document.createElement("code");
      typeCode.classList.add("component-details__type-code");

      // Add the code to the code element
      typeCode.textContent = type.code;
      preformatted.append(typeCode);
      typeContainer.append(preformatted)
    }

    // Create the demo container
    const demoContainer = createDivElement("component-details__demo-container");
    typeContainer.append(demoContainer);

    // Create the demo button
    typeContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal__button")) {
        const modal = document.querySelector(".modal");
        modal.classList.toggle("modal--hidden");
      }
    });

    const code = type.code;
    const block = component.block;

    //Loop through the sizes of the component and create the demo elements for each size using the DOMParser API
    type.sizes.forEach((size) => {

      // Create the demo element using the DOMParser API
      const parser = new DOMParser();
      
      // Parse the code to create the demo element
      const doc = parser.parseFromString(code, 'text/html');

      // Get the first element of the body
      const element = doc.body.firstElementChild;
      
      // Add the block and size classes to the demo element
      element.classList.add(`${block}--${size}`);
      demoContainer.appendChild(element);
    });
  });
};

// Function to show the component details
const showComponentDetails = (target, dataParent) => {
  const id = target.dataset.id;

  // Loop through the data to find the component with the matching id
  data[dataParent].data.forEach((component) => {
    if (component.id === id) {
      createComponentDetails(component);
    }
  });
};

// Function to create the sub list items
const createSubListItems = (parent, data, dataParent) => {
  const subListItem = document.createElement("li");
  subListItem.classList.add("sidebar__subitem");
  subListItem.dataset.id = data.id;
  subListItem.dataset.parent = dataParent;
  subListItem.textContent = data.component;
  parent.append(subListItem);
};

// Function to create the list item
const createListItem = (item, index) => {

  // Create the list item
  const listItem = document.createElement("li");
  listItem.classList.add("sidebar__item");
  sidebarList.append(listItem);

  // Create the title group
  const titleGroup = document.createElement("div");
  titleGroup.classList.add("sidebar__title-group");

  // Create the item title
  const itemTitle = createTextElement("h3", "sidebar__title", item.title);


  // Create the chevron icon
  const chevron = document.createElement("img");
  chevron.classList.add("sidebar__chevron");
  chevron.src = "./assets/icons/chevron-lsolid.svg";
  chevron.alt = "chevron";
  titleGroup.append(itemTitle, chevron);

  // Create the sublist
  const subList = document.createElement("ul");
  subList.classList.add("sidebar__sublist");
  subList.classList.add("sidebar__sublist--open");

  // Append the title group and sublist to the list item
  listItem.append(titleGroup, subList);


  // Loop through the data of the item and create the sub list items
  item.data.forEach((component) => {

    // Create the sub list items
    createSubListItems(subList, component, index);

    // Add an event listener to the sub list items
    subList.addEventListener("click", (e) => {
      if (e.target.classList.contains("sidebar__subitem")) {
        const target = e.target;
        const dataParent = target.dataset.parent;
        showComponentDetails(target, dataParent);
      }
    });
  });

  // Set the height of the sublist to the scroll height
  subList.style.height = `${subList.scrollHeight}px`;
  titleGroup.addEventListener("click", collapseComponents);
};

// Function to initialize the DOM
const initializeDOM = () => {
  // Loop through the data and create the list items if the DOM has not been initialized
  data.forEach((item, index) => {
    if (!initialized) {

      // Create the list items
      createListItem(item, index);
    }

    // Create the component details container
    const canvas = document.createElement("div");
    canvas.classList.add("component-details__canvas");

    // Create the title
    const title = createTextElement("h2", "component-details__category", item.title);
    details.append(title, canvas);


    // Loop through the data of the item and create the component details
    item.data.forEach((element) => {

      // Create the component
      const component = document.createElement("div");
      component.classList.add("component-details__component");
      component.dataset.id = element.id;
      component.dataset.parent = index;

      // Add an event listener to the component
      component.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const dataParent = target.dataset.parent;
        showComponentDetails(target, dataParent);
      });

      // Append the component to the canvas
      canvas.append(component);

      // Create the component title and description
      const componentTitle = createTextElement("h3", "component-details__title", element.component);
      const componentDescription = createTextElement("p", "component-details__description", element.description);

      // Append the title and description to the component
      component.append(componentTitle, componentDescription);
    });
  });

  // Set the initialized variable to true
  initialized = true;
};

// Function to reinitialize the DOM
const reinitializeDOM = () => {
  // Clear the canvas and reinitialize the DOM
  canvas.innerHTML = "";
  // Set the initialized variable to false
  initializeDOM();
};

// Function to trigger the drawer
const triggerDrawer = () => {
  // Toggle the sidebar and chevron classes
  sidebar.classList.toggle("sidebar--retracted");
  chevron.classList.toggle("sidebar__drawer-button-icon--rotated");
};
