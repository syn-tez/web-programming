export const createFooterColumnTemplate = ({ title, items }) => `
    <div class="footer__block">
        <h3 class="footer__header">${title}</h3>
        <aside class="footer__menu">
            <ul class="menu">
                ${items.map(item => `
                    <li class="menu__item">
                        <a href="#" class="item__link">${item}</a>
                    </li>
                `).join("")}
            </ul>
        </aside>
    </div>
`;

export const footerTemplate = ({ 
    mainHeader, 
    mainButtonTitle, 
    logo, 
    brandInfo, 
    linksCol, 
    companyCol, 
    contactsCol 
}) => {
  const linksTemplate = createFooterColumnTemplate(linksCol);
  const companyTemplate = createFooterColumnTemplate(companyCol);
  const contactsTemplate = createFooterColumnTemplate(contactsCol);

  return `
    <div class="footer_section__top">
        <h2 class="top__header">${mainHeader}</h2>
        <button class="top__button" type="button">${mainButtonTitle}</button>
    </div>
    <div class="footer_section__bottom">
        <div class="footer__logo_block">
            <img class="footer__logo" src="${logo.src}" alt="${logo.alt}" />
            <p class="footer__description">${brandInfo.address}</p>
            <p class="footer__description">${brandInfo.rights}</p>
        </div>
        <div class="footer__links">
            ${linksTemplate}
            ${companyTemplate}
            ${contactsTemplate}
        </div>
    </div>
    <div class="footer_section__law">
        <p class="law__text">© 2021 GPT-3. Все права защищены.</p>
    </div>
  `;
};