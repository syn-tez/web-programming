/* import showcaseData from "../../mockData/showcaseData.js";
import { showcaseTemplate } from "../templates/showcaseTemplate.js";

const initShowcase = (showcaseNode) => {
  showcaseNode.insertAdjacentHTML(
    "beforeend",
    showcaseTemplate(showcaseData)
  );
};

export default initShowcase; */

import showcaseData from "../../mockData/showcaseData.js";
import { showcaseTemplate } from "../templates/showcaseTemplate.js";

const initShowcase = (showcaseNode) => {
  console.log("Попытка инициализации Showcase..."); // Маячок 1

  if (!showcaseNode) {
    console.error("Ошибка: Узел для вставки Showcase не найден!");
    return;
  }

  console.log("Данные для вставки:", showcaseData); // Маячок 2

  showcaseNode.insertAdjacentHTML(
    "beforeend",
    showcaseTemplate(showcaseData)
  );
  
  console.log("HTML вставлен в DOM"); // Маячок 3
};

export default initShowcase;