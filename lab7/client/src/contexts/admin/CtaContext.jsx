import { createContext, useContext, useRef } from "react";
import ctaData from "../../mockData/ctaData";

const CtaContext = createContext();
const PostCtaContext = createContext();

const CtaContextProvider = ({ children }) => {
    const data = useRef(ctaData);

    return (
        <CtaContext.Provider value={data.current}>
        {children}
        </CtaContext.Provider>
    );
};

export const useCtaContext = () => useContext(CtaContext);
export const usePostCtaContext = () => useContext(PostCtaContext);

export default CtaContextProvider;