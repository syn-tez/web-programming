import showcaseData from "../../mockData/showcaseData.js";
import { showcaseTemplate } from "../templates/showcaseTemplate.js";

const initShowcase = (showcaseNode) => {
  showcaseNode.insertAdjacentHTML(
    "beforeend",
    showcaseTemplate(showcaseData)
  );
};

export default initShowcase;