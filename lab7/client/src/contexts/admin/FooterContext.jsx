import { createContext, useContext, useRef } from "react";
import footerData from "../../mockData/footerData";

const FooterContext = createContext();
const PostFooterContext = createContext();

const FooterContextProvider = ({ children }) => {
    const data = useRef(footerData);

    return (
        <FooterContext.Provider value={data.current}>
        {children}
        </FooterContext.Provider>
    );
};

export const useFooterContext = () => useContext(FooterContext);
export const usePostFooterContext = () => useContext(PostFooterContext);

export default FooterContextProvider;