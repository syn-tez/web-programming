import ctaDataMock from '../mockData/ctaData';
import useData from "../hooks/useData";
import Preloader from "./Preloader";

const Cta = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "cta",
        options: { method: "GET" },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;

    const renderedData = data || ctaDataMock;
    const { header, content, buttonTitle } = renderedData;

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