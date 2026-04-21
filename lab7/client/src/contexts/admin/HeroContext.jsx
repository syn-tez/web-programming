import { createContext, useContext, useRef } from "react";
import { heroData } from "../../mockData/heroData";

const HeroContext = createContext();
const PostHeroContext = createContext();

const HeroContextProvider = ({ children }) => {
  const data = useRef(heroData);

  const postData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cms/hero", {
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
    <HeroContext.Provider value={data.current}>
      <PostHeroContext.Provider value={postData}>
        {children}
      </PostHeroContext.Provider>
    </HeroContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useHeroContext = () => useContext(HeroContext);
const usePostHeroContext = () => useContext(PostHeroContext);

export { useHeroContext, usePostHeroContext };
export default HeroContextProvider;
