import { createContext, useContext, useRef } from "react";
import blogData from "../../mockData/blogData";

const BlogContext = createContext();
const PostBlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const data = useRef(blogData);

    const postData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cms/blog", {
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
        <BlogContext.Provider value={data.current}>
            <PostBlogContext.Provider value={postData}>
                {children}
            </PostBlogContext.Provider>
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => useContext(BlogContext);
export const usePostBlogContext = () => useContext(PostBlogContext);

export default BlogContextProvider;