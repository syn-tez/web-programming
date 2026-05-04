import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import { 
    useBlogContext,
    usePostBlogContext
} from "../../contexts/admin/BlogContext";

const AdminBlogItem = ({ item, index }) => {
    const [titleData, setTitleData] = useState(item.title);
    const [dateData, setDateData] = useState(item.date);
    const [isLargeData, setIsLargeData] = useState(item.isLarge);
    
    let blogContext = useBlogContext();

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        blogContext.articles[index].title = e.target.value;
    };

    const handleDateData = (e) => {
        setDateData(e.target.value);
        blogContext.articles[index].date = e.target.value;
    };

    const handleIsLarge = (e) => {
        setIsLargeData(e.target.checked);
        blogContext.articles[index].isLarge = e.target.checked;
    };

    return (
        <div className="block__card" style={{ border: '1px solid #444', padding: '15px', marginBottom: '15px' }}>
            <div className="block__item">
                <label>
                    <input type="checkbox" checked={isLargeData} onChange={handleIsLarge} />
                    Большая карточка
                </label>
            </div>
            <div className="block__item">
                <label>Заголовок статьи:</label>
                <input type="text" value={titleData} onChange={handleTitleData} />
            </div>
            <div className="block__item">
                <label>Дата:</label>
                <input type="text" value={dateData} onChange={handleDateData} />
            </div>
        </div>
    );
};

const AdminBlog = () => {
    const { isLoading, isError, data } = useData({
        endpoint: "blog",
        options: { method: "GET" },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const postData = usePostBlogContext();

    const handlePostData = async () => {
        setIsPostDataLoading(true);
        try {
            await postData();
        } catch (e) {
            console.error(e);
        }
        setIsPostDataLoading(false);
    };

    if (isLoading || !data) return <Preloader />;

    return (
        <div className="admin_container">
            <h2>Настройка Блога</h2>
            <div className="admin_container__block">
                {/* Заменили posts на articles */}
                {data.articles?.map((item, index) => (
                    <AdminBlogItem key={index} item={item} index={index} />
                ))}
            </div>

            <button className="btn primary-btn" onClick={handlePostData}>
                {isPostDataLoading ? "Сохранение..." : "Сохранить"}
            </button>
        </div>
    );
};

export default AdminBlog;