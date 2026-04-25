import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import { useBlogContext } from "../../contexts/admin/BlogContext";
import usePostData from "../../hooks/usePostData";

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
    const blogContext = useBlogContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "blog" });

    useEffect(() => {
        if (status === "success" || status === "error") {
            toast(statusDescription);
        }
    }, [status, statusDescription]);

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: blogContext });
    };

    if (status === "loading") return <Preloader />;
    if (!data)
        return (
            <div>
                <h3>Данные не загружены</h3>
            </div>
        );

    return (
        <div className="admin_container">
            <h2>Настройка Блога</h2>
            <div className="admin_container__block">
                {data.articles?.map((item, index) => (
                    <AdminBlogItem key={index} item={item} index={index} />
                ))}
            </div>

            <button className="btn primary_btn" onClick={handlePostData}>
                Сохранить изменения
            </button>
        </div>
    );
};

export default AdminBlog;