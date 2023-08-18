import axios from "axios";
import { useEffect, useState, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("General");
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=US&category=${categoria}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(URL);
      setNoticias(data.articles);
    };
    consultarAPI()
  }, [categoria]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <NoticiasContext.Provider value={{ categoria, handleChangeCategoria, noticias }}>
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;