import { AbsoluteCenter, Box, Divider, Heading, Text } from "@chakra-ui/react";
import RootLayout from "../layout/RootLayout";
import MoviesGrid from "../components/movies/MoviesGrid";
import { observer } from "mobx-react-lite";
import movieStore from "../store/movieStore";

const Likes = observer(() => {
  return (
    <RootLayout>
      <Box>
        <Heading py={"2"}>Liked Movies</Heading>
        <Divider />
      </Box>
      {movieStore.getLikedMoviesCount() > 0 ? (
        <MoviesGrid movies={movieStore.likedMovies} />
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
