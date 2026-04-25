import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import { useFooterContext } from "../../contexts/admin/FooterContext";
import usePostData from "../../hooks/usePostData";


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
    const footerContext = useFooterContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "footer" });

    useEffect(() => {
        if (status === "success" || status === "error") {
            toast(statusDescription);
        }
    }, [status, statusDescription]);

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: footerContext });
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
            <h2>Футер</h2>
            <AdminFooterLogo logoData={data.brandInfo} />
            <div className="admin_container__block">
                <h3>Колонки ссылок:</h3>
                <AdminFooterLinksGroup group={data.linksCol} groupKey="linksCol" />
                <AdminFooterLinksGroup group={data.companyCol} groupKey="companyCol" />
                <AdminFooterLinksGroup group={data.contactsCol} groupKey="contactsCol" />
            </div>
            <button className="btn primary_btn" onClick={handlePostData}>
                Сохранить изменения
            </button>
        </div>
    );
};

export default AdminFooter;