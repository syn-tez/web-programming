import { createContext, useContext, useRef } from "react";
import headerData from "../../mockData/headerData";

const HeaderContext = createContext();
const PostHeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  // храним данные по этому блоку с данными в ref,
  // чтобы не вызывать ререндер на каждое изменение значения в инпуте
  const data = useRef(headerData);

  const postData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cms/header", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.current),
      });
      return await response.json();
    } catch (error) {
      return { isPostDataError: true, postDataError: error.message };
    }
  };

  // Возвращаем 2 контекста
  // 1 - для получения данных
  // 2 - для отправки данных на сервер и получения результата
  return (
    <HeaderContext.Provider value={data.current}>
      <PostHeaderContext.Provider value={postData}>
        {children}
      </PostHeaderContext.Provider>
    </HeaderContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useHeaderContext = () => useContext(HeaderContext);
const usePostHeaderContext = () => useContext(PostHeaderContext);

export { useHeaderContext, usePostHeaderContext };
export default HeaderContextProvider;
