import {
  AbsoluteCenter,
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import RootLayout from "../layout/RootLayout";
import { observer } from "mobx-react-lite";
import movieStore from "../store/movieStore";
import MovieCard from "../components/movies/MovieCard";

const Likes = observer(() => {
  return (
    <RootLayout>
      <Box>
        <Heading py={"2"}>Liked Movies</Heading>
        <Divider />
      </Box>
      {movieStore.getLikedMoviesCount() > 0 ? (
        <Container my={"4rem"} maxWidth={"6xl"} centerContent>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={"8"}
          >
            {movieStore.likedMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Grid>
        </Container>
      ) : (
        <AbsoluteCenter>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            No Movies Liked Yet
          </Text>
        </AbsoluteCenter>
      )}
    </RootLayout>
  );
});
export default Likes;
