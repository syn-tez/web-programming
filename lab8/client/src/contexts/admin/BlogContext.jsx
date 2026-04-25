import { createContext, useContext, useRef, useState } from "react";
import blogData from "../../mockData/blogData";

const controller = new AbortController();
const signal = controller.signal;
const endpoint = "blog";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

const BlogContext = createContext();
const PostBlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const data = useRef(blogData);
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = async () => {
        const url = `http://localhost:5000/api/cms/${endpoint}`;
        options.body = JSON.stringify(data.current);

        const fetchData = async () => {
            setIsPostDataLoading(true);

            try {
                const response = await fetch(url, options, signal)
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
        <BlogContext.Provider value={data.current}>
            <PostBlogContext.Provider value={postData}>
                {children}
            </PostBlogContext.Provider>
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => useContext(BlogContext);
export const usePostBlogContext = () => useContext(PostBlogContext);

export { useBlogContext, usePostBlogContext };
export default BlogContextProvider;