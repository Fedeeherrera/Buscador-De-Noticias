import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";

const useNoticias = () => {
  //Este Hook permite usar los values de NoticiasProvider
  return useContext(NoticiasContext);
};

export default useNoticias;
