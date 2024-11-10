import { data } from "./data.js";

const drawerButton = document.querySelector(".components__drawer-button");
const chevron = document.querySelector(".components__drawer-chevron");

const components = document.querySelector(".components");
const componentsList = document.querySelector(".components__list");
const componentsSublist = document.querySelector(".components__sublist");

const search = document.querySelector(".page-header__search");

const createListItem = (title) => {
  console.log(title);
  const listItem = document.createElement("li");
  listItem.classList.add("components__item");

  console.log(componentsList);
  console.log(listItem);
  componentsList.appendChild(listItem);

  const titleGroup = document.createElement("div");
  titleGroup.classList.add("components__title-group");
  listItem.appendChild(titleGroup);

  const itemTitile = document.createElement("h3");
  itemTitile.classList.add("components__title");
  itemTitile.textContent = title;
  titleGroup.appendChild(itemTitile);

  const chevron = document.createElement("img");
  chevron.classList.add("components__chevron");
  chevron.src = "./assets/icons/chevron-lsolid.svg";
  chevron.alt = "chevron";
  titleGroup.appendChild(chevron);
};

constCreate

data.forEach((item) => {
  console.log(item);
  createListItem(item.title);
});

const triggerDrawer = () => {
  components.classList.toggle("retracted");
  chevron.classList.toggle("components__drawer-chevron");
  chevron.classList.toggle("components__drawer-chevron--rotated");
};

const onUnfocusSearch = () => {
  search.value = "";
};

const componentsTitleGroup = document.querySelectorAll(
  ".components__title-group"
);

const collapseComponents = (e) => {
  let children = e.currentTarget.children;
  let subListTarget = e.currentTarget.nextElementSibling;

  for (let child of children) {
    if (child.classList.contains("components__chevron")) {
      child.classList.toggle("components__chevron--rotated");
    }
  }

  if (subListTarget.classList.contains("open")) {
    subListTarget.classList.toggle("open");
    subListTarget.style.height = "0px";
    return;
  } else {
    const scrollHeight = componentsSublist.scrollHeight;
    subListTarget.style.height = `${scrollHeight}px`;
    subListTarget.classList.toggle("open");
  }
};

componentsTitleGroup.forEach((chevron) => {
  chevron.addEventListener("click", collapseComponents);
});

search.addEventListener("blur", onUnfocusSearch);
drawerButton.addEventListener("click", triggerDrawer);
