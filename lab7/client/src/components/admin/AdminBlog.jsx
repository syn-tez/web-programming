import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import { 
    useBlogContext,
    usePostBlogContext
} from "../../contexts/admin/BlogContext";

const AdminBlogItem = ({ item, index }) => {
    const [titleData, setTitleData] = useState(item.title);
    const [textData, setTextData] = useState(item.text);
    let blogContext = useBlogContext();

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        blogContext.posts[index].title = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.target.value);
        blogContext.posts[index].text = e.target.value;
    };

    return (
        <div className="block__card">
        <div className="block__item">
            <label>Заголовок поста:</label>
            <input type="text" value={titleData} onChange={handleTitleData} />
        </div>
        <div className="block__item">
            <label>Текст поста:</label>
            <textarea value={textData} onChange={handleTextData} />
        </div>
        </div>
    );
};

const AdminBlog = () => {
    const { isLoading, isError, error, data } = useData({
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
        <h2>Блог</h2>
        <div className="admin_container__block">
            {data.posts.map((item, index) => (
            <AdminBlogItem key={index} item={item} index={index} />
            ))}
        </div>
        <button className="btn primary-btn" onClick={handlePostData}>
            {isPostDataLoading && <Preloader />} Сохранить
        </button>
        </div>
    );
};

export default AdminBlog;