import { Container, Grid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MoviesGrid = ({ movies }) => {
  console.log(movies, "movies");
  return (
    <Container my={"4rem"} maxWidth={"6xl"} centerContent>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"8"}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
};
export default MoviesGrid;
