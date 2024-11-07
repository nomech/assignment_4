const test = document.querySelector(".tester");
console.log("test");

const components = document.querySelector(".components");
const componentsList = document.querySelector(".components-list");
const componentsSublist = document.querySelector(".components-sublist");


test.addEventListener("click", function() {
    components.classList.toggle("test")
    componentsList.classList.toggle("test")
    componentsSublist.classList.toggle("test")
});