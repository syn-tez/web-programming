import { createContext, useContext, useRef } from "react";
import showcaseData from "../../mockData/showcaseData";

const controller = new AbortController();
const signal = controller.signal;
const endpoint = "blog";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

const ShowcaseContext = createContext();
const PostShowcaseContext = createContext();

const ShowcaseContextProvider = ({ children }) => {
    const data = useRef(showcaseData);
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
        };

        return await fetchData();
    };

    return (
        <ShowcaseContext.Provider value={data.current}>
            <PostShowcaseContext.Provider value={postData}>
                {children}
            </PostShowcaseContext.Provider>
        </ShowcaseContext.Provider>
    );
};

const useShowcaseContext = () => useContext(ShowcaseContext);
const usePostShowcaseContext = () => useContext(PostShowcaseContext);

export { useShowcaseContext, usePostShowcaseContext };
export default ShowcaseContextProvider;