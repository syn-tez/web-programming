import { createContext, useContext, useRef } from "react";
import showcaseData from "../../mockData/showcaseData";

const ShowcaseContext = createContext();
const PostShowcaseContext = createContext();

const ShowcaseContextProvider = ({ children }) => {
    const data = useRef(showcaseData);

    return (
        <ShowcaseContext.Provider value={data.current}>
        {children}
        </ShowcaseContext.Provider>
    );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
export const usePostShowcaseContext = () => useContext(PostShowcaseContext);

export default ShowcaseContextProvider;