import axios from "axios";
import { useEffect, useState, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("General");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=US&page=2&category=${categoria}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(URL);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    };
    consultarAPI();
  }, [categoria]);

  useEffect(() => {
    const consultarAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=US&page=${pagina}&page=2&category=${categoria}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(URL);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    };
    consultarAPI();
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor.target.textContent);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
