import { createContext, useContext, useRef } from "react";
import blogData from "../../mockData/blogData";

const BlogContext = createContext();
const PostBlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const data = useRef(blogData);

    return (
        <BlogContext.Provider value={data.current}>
        {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => useContext(BlogContext);
export const usePostBlogContext = () => useContext(PostBlogContext);

export default BlogContextProvider;