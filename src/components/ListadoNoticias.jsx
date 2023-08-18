import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Noticia from "./Noticia";
import useNoticias from "../hooks/useNoticias";

function ListadoNoticias() {
  const { noticias, totalNoticias, handleChangePagina } = useNoticias();
  const totalPagina = Math.ceil(totalNoticias / 20);



  return (
    <>
      <Typography textAlign="center" marginY="5" variant="h3" component="h2">
        Ultimas Noticias
      </Typography>

      <Grid container spacing="6">
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.url} />
        ))}
      </Grid>

      <Stack
        sx={{ marginY: 5 }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={totalPagina}
          color="primary"
          onChange={handleChangePagina}
        />
      </Stack>
    </>
  );
}

export default ListadoNoticias;
