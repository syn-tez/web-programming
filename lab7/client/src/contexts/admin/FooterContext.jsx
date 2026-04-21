import { createContext, useContext, useRef } from "react";
import footerData from "../../mockData/footerData";

const FooterContext = createContext();
const PostFooterContext = createContext();

const FooterContextProvider = ({ children }) => {
    const data = useRef(footerData);

    const postData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cms/footer", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data.current),
            });

            const result = await response.json();
            return result;
            } catch (error) {
            return {
                isPostDataError: true,
                postDataError: error.message,
            };
        }
    };

    return (
        <FooterContext.Provider value={data.current}>
            <PostFooterContext.Provider value={postData}>
                {children}
            </PostFooterContext.Provider>
        </FooterContext.Provider>
    );
};

export const useFooterContext = () => useContext(FooterContext);
export const usePostFooterContext = () => useContext(PostFooterContext);

export default FooterContextProvider;