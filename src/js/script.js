const drawerButton = document.querySelector(".components__drawer-button");
const chevron = document.querySelector(".components__drawer-chevron");

const components = document.querySelector(".components");
const componentsList = document.querySelector(".components-list");
const componentsSublist = document.querySelector(".components-sublist");


drawerButton.addEventListener("click", function() {

    chevron.classList.toggle("components__drawer-chevron");
    chevron.classList.toggle("components__drawer-chevron--rotated");
});

const search = document.querySelector(".page-header__search");

search.addEventListener('blur', function() {
  search.value = '';
});
