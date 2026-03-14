import { generatorPage, clipButton } from "./generatorPage.js";

export default () => {
  document.addEventListener("click", (e) => {
    const element = e.target;
    
    if (element.classList.contains("gerar-senha")) {
      generatorPage();
    } 
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      generatorPage();
    }
  });
  document.addEventListener("click", (e) => {
    const element = e.target;

    if (element.classList.contains("clip")) {
      clipButton();
    }
  });
};
