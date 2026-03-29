/* export const createIllustrationTemplate = ({ src, alt }) => `
    <img src="${src}" alt="${alt}" />
`; */

export const createIllustrationTemplate = ({ src, alt }) => `
    <img 
        src="${src}" 
        alt="${alt}" 
        onload="console.log('Изображение успешно загружено: ${src}')" 
        onerror="this.style.display='none'; console.error('Ошибка загрузки фото по адресу: ${src}')" 
    />
`;

export const createContentTemplate = ({ eyebrow, title, description, bottomCta }) => `
    <div class="showcase_section__right"> <p class="right__cta">${eyebrow}</p>
        <h2 class="right__header">${title}</h2>
        <p class="right__description">${description}</p>
        <a href="#" class="right__cta_bottom">${bottomCta}</a>
    </div>
`;

export const showcaseTemplate = ({ illustration, eyebrow, title, description, bottomCta }) => {
    const illustrationTemplate = createIllustrationTemplate(illustration);
    const contentTemplate = createContentTemplate({ eyebrow, title, description, bottomCta });

    return `
    <section class="showcase_section"> 
        <div class="showcase_section__left"> ${illustrationTemplate}
        </div>
        ${contentTemplate}
    </section>
    `;
};