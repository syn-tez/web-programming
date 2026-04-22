import { useState, useEffect } from "react";
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

    const [headerData, setHeaderData] = useState("");
    const [contentData, setContentData] = useState("");
    const [buttonTitleData, setButtonTitleData] = useState("");

    const ctaContext = useCtaContext();
    const postData = usePostCtaContext();

    useEffect(() => {
        if (data) {
            setHeaderData(data.header || "");
            setContentData(data.content || "");
            setButtonTitleData(data.buttonTitle || "");
        }
    }, [data]);

    const handleHeader = (e) => {
        setHeaderData(e.target.value);
        ctaContext.header = e.target.value;
    };

    const handleContent = (e) => {
        setContentData(e.target.value);
        ctaContext.content = e.target.value;
    };

    const handleButtonTitle = (e) => {
        setButtonTitleData(e.target.value);
        ctaContext.buttonTitle = e.target.value;
    };

    if (isLoading || !data) return <Preloader />;

    return (
        <div className="admin_container">
            <h2>Настройка CTA секции</h2>
            
            <div className="block__item">
                <label>Маленький заголовок (надпись сверху):</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={headerData} 
                    onChange={handleHeader} 
                />
            </div>

            <div className="block__item">
                <label>Основной текст (крупный):</label>
                <textarea 
                    className="item__long_input" 
                    style={{ width: '100%', height: '80px' }}
                    value={contentData} 
                    onChange={handleContent} 
                />
            </div>

            <div className="block__item">
                <label>Текст на кнопке:</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={buttonTitleData} 
                    onChange={handleButtonTitle} 
                />
            </div>

            <button className="btn primary_btn" onClick={() => postData()}>
                Сохранить изменения
            </button>
        </div>
    );
};

export default AdminCta;