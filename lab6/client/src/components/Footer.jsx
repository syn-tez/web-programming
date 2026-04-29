import footerDataMock from '../mockData/footerData';
import useData from "../hooks/useData";
import Preloader from "./Preloader";

const FooterColumn = ({ title, items }) => (
    <div className="footer__block">
        <h3 className="footer__header">{title}</h3>
        <aside className="footer__menu">
            <ul className="menu">
                {items.map((item, index) => (
                    <li key={index} className="menu__item">
                        <a href="#" className="item__link">{item}</a>
                    </li>
                ))}
            </ul>
        </aside>
    </div>
);

const Footer = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "footer",
        options: { method: "GET" },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;

    const renderedData = data || footerDataMock;
    const { mainHeader, mainButtonTitle, logo, brandInfo, linksCol, companyCol, contactsCol } = renderedData;

    return (
        <footer className="footer_section">
            <div className="footer_section__top">
                <h2 className="top__header">{mainHeader}</h2>
                <button className="top__button" type="button">{mainButtonTitle}</button>
            </div>
            <div className="footer_section__bottom">
                <div className="footer__logo_block">
                    <img className="footer__logo" src={logo.src} alt={logo.alt} />
                    <p className="footer__description">{brandInfo.address}</p>
                    <p className="footer__description">{brandInfo.rights}</p>
                </div>
                <div className="footer__links">
                    <FooterColumn title={linksCol.title} items={linksCol.items} />
                    <FooterColumn title={companyCol.title} items={companyCol.items} />
                    <FooterColumn title={contactsCol.title} items={contactsCol.items} />
                </div>
            </div>
            <div className="footer_section__law">
                <p className="law__text">© 2026 GPT-4. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;