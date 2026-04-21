import { createContext, useContext, useRef } from "react";
import ctaData from "../../mockData/ctaData";

const CtaContext = createContext();
const PostCtaContext = createContext();

const CtaContextProvider = ({ children }) => {
    const data = useRef(ctaData);

    const postData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cms/cta", {
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
        <CtaContext.Provider value={data.current}>
            <PostCtaContext.Provider value={postData}>
                {children}
            </PostCtaContext.Provider>
        </CtaContext.Provider>
    );
};

export const useCtaContext = () => useContext(CtaContext);
export const usePostCtaContext = () => useContext(PostCtaContext);

export default CtaContextProvider;