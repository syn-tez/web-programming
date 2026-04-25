import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import {
    useCtaContext,
    usePostCtaContext
} from "../../contexts/admin/CtaContext";
import usePostData from "../../hooks/usePostData";

const AdminCta = () => {
    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "cta" });

    const [headerData, setHeaderData] = useState("");
    const [contentData, setContentData] = useState("");
    const [buttonTitleData, setButtonTitleData] = useState("");

    let ctaContext = useCtaContext();

    useEffect(() => {
        if (data) {
            setHeaderData(data.header || "");
            setContentData(data.content || "");
            setButtonTitleData(data.buttonTitle || "");
        }
    }, [data]);

    useEffect(() => {
        if (status === "success" || status === "error") {
            toast(statusDescription);
        }
    }, [status, statusDescription]);

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

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: ctaContext });
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

            <button className="btn primary_btn" onClick={handlePostData}>
                Сохранить изменения
            </button>
        </div>
    );
};

export default AdminCta;