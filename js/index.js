import Translator from "./translator.js";

var translator = new Translator({
  persist: true,
  languages: ["en", "vi"],
  defaultLanguage: "vi",
  detectLanguage: true,
  filesLocation: "/i18n",
});

translator.load();

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

dropdownMenu.childNodes.forEach((node) => {
  node.addEventListener("click", () => {
    translator.load(node.dataset.language);
  });
});
