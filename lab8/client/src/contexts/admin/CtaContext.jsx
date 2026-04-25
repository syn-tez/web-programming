import { createContext, useContext, useRef, useState } from "react";
import ctaData from "../../mockData/ctaData";

const controller = new AbortController();
const signal = controller.signal;
const endpoint = "cta";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

const CtaContext = createContext();
const PostCtaContext = createContext();

const CtaContextProvider = ({ children }) => {
    const data = useRef(ctaData);
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = async () => {
        const url = `http://localhost:5000/api/cms/${endpoint}`;
        options.body = JSON.stringify(data.current);

        const fetchData = async () => {
            setIsPostDataLoading(true);

            try {
                const response = await fetch(url, options, signal);
                const jsonData = await response.json();

                if (!response.ok) {
                    setIsPostDataError(true);
                    setPostDataError(jsonData.error);
                    return;
                }

                setIsPostDataError(false);
                setPostDataError(null);
            } catch (error) {
                setIsPostDataError(true);
                setPostDataError(error.message);
            }

            setIsPostDataLoading(false);

            return {
                isPostDataLoading,
                isPostDataError,
                postDataError,
            };
        }
        
        return await fetchData();
    };

    return (
        <CtaContext.Provider value={data.current}>
            <PostCtaContext.Provider value={postData}>
                {children}
            </PostCtaContext.Provider>
        </CtaContext.Provider>
    );
};

const useCtaContext = () => useContext(CtaContext);
const usePostCtaContext = () => useContext(PostCtaContext);

export { useCtaContext, usePostCtaContext };
export default CtaContextProvider;