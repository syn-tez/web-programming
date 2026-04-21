import { createContext, useContext, useRef } from "react";
import showcaseData from "../../mockData/showcaseData";

const ShowcaseContext = createContext();
const PostShowcaseContext = createContext();

const ShowcaseContextProvider = ({ children }) => {
    const data = useRef(showcaseData);

    const postData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cms/showcase", {
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
        <ShowcaseContext.Provider value={data.current}>
            <PostShowcaseContext.Provider value={postData}>
                {children}
            </PostShowcaseContext.Provider>
        </ShowcaseContext.Provider>
    );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
export const usePostShowcaseContext = () => useContext(PostShowcaseContext);

export default ShowcaseContextProvider;