import ctaData from "../../mockData/ctaData.js";
import { ctaTemplate } from "../templates/ctaTemplate.js";

const initCTA = (ctaNode) => {
  if (!ctaNode) return;

  ctaNode.insertAdjacentHTML(
    "beforeend",
    ctaTemplate(ctaData)
  );
};

export default initCTA;