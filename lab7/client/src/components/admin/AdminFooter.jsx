import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useFooterContext,
    usePostFooterContext,
} from "../../contexts/admin/FooterContext";

const AdminFooterLogo = ({ logoData }) => {
    const [descriptionData, setDescriptionData] = useState(logoData.description);
    let footerContext = useFooterContext();

    const handleDescription = (e) => {
        setDescriptionData(e.target.value);
        footerContext.logoData.description = e.target.value;
    };

    return (
        <div className="admin_container__block">
        <h3>Описание в футере:</h3>
        <div className="block__item">
            <label>Текст под логотипом:</label>
            <textarea 
            value={descriptionData} 
            onChange={handleDescription} 
            style={{ width: '100%', height: '100px' }}
            />
        </div>
        </div>
    );
};

const AdminFooterLinksGroup = ({ group, groupIndex }) => {
    const [titleData, setTitleData] = useState(group.title);
    let footerContext = useFooterContext();

    const handleGroupTitle = (e) => {
        setTitleData(e.target.value);
        footerContext.linksData[groupIndex].title = e.target.value;
    };

    return (
    <div className="block__card">
        <div className="block__item">
            <label>Заголовок колонки:</label>
            <input type="text" value={titleData} onChange={handleGroupTitle} />
        </div>
        <h4>Ссылки в колонке:</h4>
        {group.links.map((link, linkIndex) => (
            <AdminFooterSingleLink 
            key={linkIndex} 
            link={link} 
            groupIndex={groupIndex} 
            linkIndex={linkIndex} 
            />
        ))}
        </div>
    );
};

const AdminFooterSingleLink = ({ link, groupIndex, linkIndex }) => {
    const [textData, setTextData] = useState(link.text);
    let footerContext = useFooterContext();

    const handleLinkText = (e) => {
        setTextData(e.target.value);
        footerContext.linksData[groupIndex].links[linkIndex].text = e.target.value;
    };

    return (
        <div className="block__item" style={{ marginLeft: '20px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
        <label>Текст ссылки:</label>
        <input type="text" value={textData} onChange={handleLinkText} />
        </div>
    );
};

const AdminFooter = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "footer",
        options: { method: "GET" },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const postData = usePostFooterContext();

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
        <h2>Футер</h2>
        <AdminFooterLogo logoData={data.logoData} />
        
        <div className="admin_container__block">
            <h3>Группы ссылок:</h3>
            {data.linksData.map((group, index) => (
            <AdminFooterLinksGroup key={index} group={group} groupIndex={index} />
            ))}
        </div>

        <button className="btn primary-btn" onClick={handlePostData}>
            {isPostDataLoading && <Preloader />} Сохранить
        </button>
        {isError && <div className="error">{JSON.stringify(error)}</div>}
        </div>
    );
};

export default AdminFooter;