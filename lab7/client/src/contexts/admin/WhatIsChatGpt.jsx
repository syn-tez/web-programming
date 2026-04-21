import { createContext, useContext, useRef } from "react";
import whatIsGptData from "../../mockData/whatIsGptData";

const WhatIsChatGptContext = createContext();
const PostWhatIsChatGptContext = createContext();

const WhatIsChatGptContextProvider = ({ children }) => {
  const data = useRef(whatIsGptData);

  const postData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cms/what-is-chatgpt", {
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
    <WhatIsChatGptContext.Provider value={data.current}>
      <PostWhatIsChatGptContext.Provider value={postData}>
        {children}
      </PostWhatIsChatGptContext.Provider>
    </WhatIsChatGptContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useWhatIsChatGptContext = () => useContext(WhatIsChatGptContext);
const usePostWhatIsChatGptContext = () => useContext(PostWhatIsChatGptContext);

export { useWhatIsChatGptContext, usePostWhatIsChatGptContext };
export default WhatIsChatGptContextProvider;
