import { useState, useEffect } from "react";
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

    const [eyebrowData, setEyebrowData] = useState("");
    const [titleData, setTitleData] = useState("");
    const [descriptionData, setDescriptionData] = useState("");
    const [bottomCtaData, setBottomCtaData] = useState("");

    const showcaseContext = useShowcaseContext();
    const postData = usePostShowcaseContext();

    useEffect(() => {
        if (data) {
            setEyebrowData(data.eyebrow || "");
            setTitleData(data.title || "");
            setDescriptionData(data.description || "");
            setBottomCtaData(data.bottomCta || "");
        }
    }, [data]);

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

    if (isLoading || !data) return <Preloader />;

    return (
        <div className="admin_container">
            <h2>Настройка секции Showcase</h2>
            
            <div className="block__item">
                <label>Надзаголовок (Eyebrow):</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={eyebrowData} 
                    onChange={handleEyebrow} 
                />
            </div>

            <div className="block__item">
                <label>Заголовок (Title):</label>
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
                <label>Текст кнопки (Bottom CTA):</label>
                <input 
                    type="text" 
                    className="item__long_input" 
                    value={bottomCtaData} 
                    onChange={handleBottomCta} 
                />
            </div>

            <button className="btn primary-btn" onClick={() => postData()}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminShowcase;