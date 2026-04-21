import blogDataMock from '../mockData/blogData';
import useData from "../hooks/useData";
import Preloader from "./Preloader";

const Blog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: { method: "GET" },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;

    const renderedData = data || blogDataMock;
    const { header, articles } = renderedData;

    return (
        <section className="blog_section">
            <h2 className="blog_section__header">{header}</h2>
            <div className="blog_section__articles">
                {articles.map((article, index) => (
                    <div 
                        key={index} 
                        className={`blog_section__article ${article.isLarge ? "article_big" : ""}`}
                    >
                        <div className="article__image">
                            <img src={article.image} alt="article" />
                        </div>
                        <div className="article__content">
                            <div className="content__top">
                                <p className="top__date">{article.date}</p>
                                <h3 className="top__header">{article.title}</h3>
                            </div>
                            <p className="content__link">{article.linkText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;