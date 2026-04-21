import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useCtaContext,
    usePostCtaContext
} from "../../contexts/admin/CtaContext";

const AdminCta = () => {
    const { isLoading, data } = useData({
        endpoint: "cta",
        options: { method: "GET" },
    });

    const [titleData, setTitleData] = useState("");
    const ctaContext = useCtaContext();
    const postData = usePostCtaContext();

    if (data && titleData === "") setTitleData(data.title);

    const handleTitle = (e) => {
        setTitleData(e.target.value);
        ctaContext.title = e.target.value;
    };

    if (isLoading || !data) return <Preloader />;

    return (
        <div className="admin_container">
        <h2>CTA Секция</h2>
        <div className="block__item">
            <label>Заголовок:</label>
            <input type="text" className="item__long_input" value={titleData} onChange={handleTitle} />
        </div>
        <button className="btn primary-btn" onClick={() => postData()}>
            Сохранить
        </button>
        </div>
    );
};

export default AdminCta;