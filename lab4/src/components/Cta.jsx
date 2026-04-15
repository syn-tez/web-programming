import ctaData from '../mockData/ctaData';

    const Cta = () => {
    const { header, content, buttonTitle } = ctaData;

    return (
        <section className="cta_section">
        <div className="cta_section__left">
            <p className="left__cta">{header}</p>
            <h2 className="left__header">{content}</h2>
        </div>
        <div className="cta_section__right">
            <button className="right__button" type="button">
            {buttonTitle}
            </button>
        </div>
        </section>
    );
    };

export default Cta;