import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useShowcaseContext,
    usePostShowcaseContext
} from "../../contexts/admin/ShowcaseContext";

const AdminShowcase = () => {
    const { isLoading, data } = useData({
        endpoint: "showcase",
        options: { method: "GET" },
    });

    const [headerData, setHeaderData] = useState("");
    const showcaseContext = useShowcaseContext();
    const postData = usePostShowcaseContext();

    if (data && headerData === "") setHeaderData(data.header);

    const handleHeader = (e) => {
        setHeaderData(e.target.value);
        showcaseContext.header = e.target.value;
    };

    if (isLoading || !data) return <Preloader />;

    return (
        <div className="admin_container">
        <h2>Showcase</h2>
        <div className="block__item">
            <label>Заголовок секции:</label>
            <input type="text" className="item__long_input" value={headerData} onChange={handleHeader} />
        </div>
        <button className="btn primary-btn" onClick={() => postData()}>
            Сохранить
        </button>
        </div>
    );
};

export default AdminShowcase;