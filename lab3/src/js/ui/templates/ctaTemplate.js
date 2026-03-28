export const ctaTemplate = ({ eyebrow, title, buttonTitle }) => `
    <div class="offer_section__left">
        <p class="left__cta">${eyebrow}</p>
        <h2 class="left__header">${title}</h2>
    </div>
    <div class="offer_section__right">
        <button class="right__button">${buttonTitle}</button>
    </div>
`;