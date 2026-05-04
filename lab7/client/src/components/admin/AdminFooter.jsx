import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useFooterContext,
    usePostFooterContext,
} from "../../contexts/admin/FooterContext";

const AdminFooterLogo = ({ logoData }) => {
    const [addressData, setAddressData] = useState(logoData?.address || "");
    const [rightsData, setRightsData] = useState(logoData?.rights || "");
    let footerContext = useFooterContext();

    const handleAddress = (e) => {
        setAddressData(e.target.value);
        footerContext.brandInfo.address = e.target.value;
    };

    const handleRights = (e) => {
        setRightsData(e.target.value);
        footerContext.brandInfo.rights = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Данные бренда:</h3>
            <div className="block__item">
                <label>Адрес:</label>
                <input type="text" value={addressData} onChange={handleAddress} />
            </div>
            <div className="block__item">
                <label>Права (Copyright):</label>
                <input type="text" value={rightsData} onChange={handleRights} />
            </div>
        </div>
    );
};

const AdminFooterLinksGroup = ({ group, groupKey }) => {
    const [titleData, setTitleData] = useState(group?.title || "");
    let footerContext = useFooterContext();

    const handleGroupTitle = (e) => {
        setTitleData(e.target.value);
        footerContext[groupKey].title = e.target.value;
    };

    return (
        <div className="admin_footer__group" style={{ marginBottom: '20px', padding: '10px', border: '1px solid #444' }}>
            <label>Заголовок колонки:</label>
            <input type="text" value={titleData} onChange={handleGroupTitle} />
            <div className="admin_footer__links">
                {group?.items?.map((item, index) => (
                    <AdminFooterLink 
                        key={index} 
                        item={item} 
                        index={index} 
                        groupKey={groupKey} 
                    />
                ))}
            </div>
        </div>
    );
};

const AdminFooterLink = ({ item, index, groupKey }) => {
    const [textData, setTextData] = useState(item);
    let footerContext = useFooterContext();

    const handleLinkText = (e) => {
        setTextData(e.target.value);
        footerContext[groupKey].items[index] = e.target.value;
    };

    return (
        <div className="block__item" style={{ marginLeft: '20px' }}>
            <label>Ссылка {index + 1}:</label>
            <input type="text" value={textData} onChange={handleLinkText} />
        </div>
    );
};

const AdminFooter = () => {
    const { isLoading, isError, data } = useData({
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
            <h2>Настройка Футера</h2>
            
            <AdminFooterLogo logoData={data.brandInfo} />
            
            <div className="admin_container__block">
                <h3>Колонки ссылок:</h3>
                <AdminFooterLinksGroup group={data.linksCol} groupKey="linksCol" />
                <AdminFooterLinksGroup group={data.companyCol} groupKey="companyCol" />
                <AdminFooterLinksGroup group={data.contactsCol} groupKey="contactsCol" />
            </div>

            <button className="btn primary-btn" onClick={handlePostData}>
                {isPostDataLoading ? "Сохранение..." : "Сохранить"}
            </button>
        </div>
    );
};

export default AdminFooter;