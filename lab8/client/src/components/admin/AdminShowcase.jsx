import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import {
    useShowcaseContext,
    usePostShowcaseContext
} from "../../contexts/admin/ShowcaseContext";
import usePostData from "../../hooks/usePostData";

const AdminShowcase = () => {
    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "showcase" });

    const [eyebrowData, setEyebrowData] = useState("");
    const [titleData, setTitleData] = useState("");
    const [descriptionData, setDescriptionData] = useState("");
    const [bottomCtaData, setBottomCtaData] = useState("");

    let showcaseContext = useShowcaseContext();

    useEffect(() => {
        if (data) {
            setEyebrowData(data.eyebrow || "");
            setTitleData(data.title || "");
            setDescriptionData(data.description || "");
            setBottomCtaData(data.bottomCta || "");
        }
    }, [data]);

    useEffect(() => {
        if (status === "success" || status === "error") {
            toast(statusDescription);
        }
    }, [status, statusDescription]);

    const handleEyebrow = (e) => {
        setEyebrowData(e.target.value);
        showcaseContext.eyebrow = e.target.value;
    };

    const handleTitle = (e) => {
        setTitleData(e.target.value);
        showcaseContext.title = e.target.value;
    };

    const handleDescription = (e) => {
        setDescriptionData(e.target.value);
        showcaseContext.description = e.target.value;
    };

    const handleBottomCta = (e) => {
        setBottomCtaData(e.target.value);
        showcaseContext.bottomCta = e.target.value;
    };

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: showcaseContext });
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
            <h2>Настройка секции Showcase</h2>
            
            <div className="block__item">
                <label>Надзаголовок:</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={eyebrowData} 
                    onChange={handleEyebrow} 
                />
            </div>

            <div className="block__item">
                <label>Заголовок:</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={titleData} 
                    onChange={handleTitle} 
                />
            </div>

            <div className="block__item">
                <label>Описание:</label>
                <textarea 
                    className="item__long_input" 
                    style={{ width: '100%', height: '100px' }}
                    value={descriptionData} 
                    onChange={handleDescription} 
                />
            </div>

            <div className="block__item">
                <label>Текст кнопки:</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={bottomCtaData} 
                    onChange={handleBottomCta} 
                />
            </div>

            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminShowcase;