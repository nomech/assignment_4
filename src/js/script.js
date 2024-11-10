import { data } from "./data.js";

const drawerButton = document.querySelector(".components__drawer-button");
const chevron = document.querySelector(".components__drawer-chevron");

const components = document.querySelector(".components");
const componentsList = document.querySelector(".components__list");
const search = document.querySelector(".page-header__search");

const collapseComponents = (e) => {
  let children = e.currentTarget.children;
  let subListTarget = e.currentTarget.nextSibling;
  const openClass = "components__sublist--open";
  
  for (let child of children) {
    if (child.classList.contains("components__chevron")) {
      child.classList.toggle("components__chevron--rotated");
    }
  }

  

  if (subListTarget.classList.contains(openClass)) {
    subListTarget.classList.toggle(openClass);
    subListTarget.style.height = "0px";
    return;
  } else {
    const scrollHeight = e.currentTarget.nextElementSibling.scrollHeight;
    subListTarget.style.height = `${scrollHeight}px`;
    subListTarget.classList.toggle("components__sublist--open");
  }
};

const createSubListItems = (parent, component) => {
  const subListItem = document.createElement("li");
  subListItem.classList.add("components__subitem");
  subListItem.textContent = component.component;
  parent.appendChild(subListItem);
};

const createListItem = (item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("components__item");
  componentsList.appendChild(listItem);

  const titleGroup = document.createElement("div");
  titleGroup.classList.add("components__title-group");
  listItem.appendChild(titleGroup);

  const itemTitle = document.createElement("h3");
  itemTitle.classList.add("components__title");
  itemTitle.textContent = item.title;
  titleGroup.appendChild(itemTitle);

  const chevron = document.createElement("img");
  chevron.classList.add("components__chevron");
  chevron.src = "./assets/icons/chevron-lsolid.svg";
  chevron.alt = "chevron";
  titleGroup.appendChild(chevron);

  const subList = document.createElement("ul");
  subList.classList.add("components__sublist");
  subList.classList.add("components__sublist--open");

  listItem.appendChild(subList);

  item.components.forEach((component) => {
    createSubListItems(subList, component);
  });
  
  subList.style.height = `${subList.scrollHeight}px`
  titleGroup.addEventListener("click", collapseComponents);
};

data.forEach((item) => {
  createListItem(item);
});

const triggerDrawer = () => {
  components.classList.toggle("retracted");
  chevron.classList.toggle("components__drawer-chevron");
  chevron.classList.toggle("components__drawer-chevron--rotated");
};

const onUnfocusSearch = () => {
  search.value = "";
};

search.addEventListener("blur", onUnfocusSearch);
drawerButton.addEventListener("click", triggerDrawer);
