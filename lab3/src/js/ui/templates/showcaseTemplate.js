export const createIllustrationTemplate = ({ src, alt }) => `
    <img src="${src}" alt="${alt}" />
`;

export const createContentTemplate = ({ eyebrow, title, description, bottomCta }) => `
    <div class="woman_section__right">
        <p class="right__cta">${eyebrow}</p>
        <h2 class="right__header">${title}</h2>
        <p class="right__description">${description}</p>
        <a href="#" class="right__cta_bottom">${bottomCta}</a>
    </div>
`;

export const showcaseTemplate = ({ illustration, eyebrow, title, description, bottomCta }) => {
  const illustrationTemplate = createIllustrationTemplate(illustration);
  const contentTemplate = createContentTemplate({ eyebrow, title, description, bottomCta });

  return `
    <div class="woman_section__left">
        ${illustrationTemplate}
    </div>
    ${contentTemplate}
  `;
};