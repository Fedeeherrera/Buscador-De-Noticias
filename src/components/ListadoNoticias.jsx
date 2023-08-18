import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Noticia from "./Noticia";
import useNoticias from "../hooks/useNoticias";

function ListadoNoticias() {
  const { noticias } = useNoticias();
  return (
    <>
      <Typography textAlign="center" marginY="5" variant="h3" component="h2">
        Ultimas Noticias
      </Typography>

      <Grid container spacing='6'>
        {noticias.map( noticia => (
            <Noticia noticia ={noticia} key={noticia.url}/>
        ))}
      </Grid>
    </>
  );
}

export default ListadoNoticias;
