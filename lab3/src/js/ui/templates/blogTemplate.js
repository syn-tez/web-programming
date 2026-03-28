export const createArticleTemplate = ({ image, date, title, linkText, isLarge }) => `
    <div class="blog_section__article ${isLarge ? "article_big" : ""}">
        <div class="article__image">
            <img src="${image}" alt="article" />
        </div>
        <div class="article__content">
            <div class="content__top">
                <p class="top__date">${date}</p>
                <h3 class="top__header">${title}</h3>
            </div>
            <p class="content__link">${linkText}</p>
        </div>
    </div>
`;

export const blogTemplate = ({ header, articles }) => {
  const articlesTemplate = articles
    .map((article) => createArticleTemplate(article))
    .join("");

  return `
    <h2 class="blog_section__header">${header}</h2>
    <div class="blog_section__articles">
        ${articlesTemplate}
    </div>
  `;
};