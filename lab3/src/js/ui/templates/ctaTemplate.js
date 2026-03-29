export const ctaTemplate = ({ header, content, buttonTitle }) => `
    <div class="cta_section__left">
        <p class="left__cta">${header}</p>
        <h2 class="left__header">${content}</h2>
    </div>
    <div class="cta_section__right">
        <button class="right__button">${buttonTitle}</button>
    </div>
`;