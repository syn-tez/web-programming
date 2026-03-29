import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initShowcase from "./../components/initShowcase.js";
import initCTA from "./../components/initCta.js";
import initBlog from "./../components/initBlog.js";
import initFooter from "./../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section showcase_section_wrapper"></section>
    <section class="section cta_section"></section>
    <section class="section blog_section"></section>
    <section class="section footer_section"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  const showcaseNode = rootNode.querySelector(".showcase_section_wrapper");
  if (showcaseNode) {
      initShowcase(showcaseNode);
  }

  const ctaNode = rootNode.querySelector(".cta_section");
  initCTA(ctaNode);

  const blogNode = rootNode.querySelector(".blog_section");
  initBlog(blogNode);

  const footerNode = rootNode.querySelector(".footer_section");
  initFooter(footerNode);
};

export default homePage;