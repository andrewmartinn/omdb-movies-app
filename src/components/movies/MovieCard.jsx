import {
  Box,
  Button,
  Card,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import movieStore from "../../store/movieStore";
import { FaHeart } from "react-icons/fa";

const MovieCard = observer(({ movie }) => {
  const handleLikeMovie = (movie) => {
    if (movieStore.isMovieLiked(movie.imdbID)) {
      movieStore.removeMovie(movie);
    } else {
      movieStore.addMovie(movie);
    }
  };
  return (
    <Card
      boxShadow={0}
      shadow={"sm"}
      borderRadius={"lg"}
      w={{ base: "100%", md: "260px", lg: "260px" }}
      height={{ base: "auto", md: "380px", lg: "380px" }}
      position={"relative"}
      _hover={{
        boxShadow: "xl",
        transition: "box-shadow 0.3s ease-in-out",
        ".like-btn": {
          opacity: 1,
          transition: "opacity 0.3s ease-in-out",
        },
      }}
    >
      <Image
        src={
          movie.Poster === "N/A"
            ? "https://via.placeholder.com/400"
            : movie.Poster
        }
        height={{ base: "auto", md: "300px", lg: "300px" }}
        w={"100%"}
        objectFit={"cover"}
        borderTopRadius={"lg"}
      />
      <Box px={"4"} py={"2"} bg={"none"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          {movie.Title}
        </Text>
        <Text>{movie.Year}</Text>
        <Text
          textTransform={"uppercase"}
          fontWeight={"bold"}
          fontSize={"9px"}
          bg={useColorModeValue("#f4f4f4", "#2D3748")}
          color={useColorModeValue("#444", "white")}
          px={"2"}
          py={"1"}
          borderRadius={"lg"}
          position={"absolute"}
          top={"2"}
          right={"2"}
        >
          {movie.Type}
        </Text>
        <Button
          className="like-btn"
          opacity={0}
          position={"absolute"}
          size={"sm"}
          top={"2"}
          left={"2"}
          onClick={() => handleLikeMovie(movie)}
          bg={useColorModeValue("#f4f4f4", "#2D3748")}
          _hover={{ bg: useColorModeValue("#f4f4f4", "#2D3748") }}
        >
          <FaHeart
            color={movieStore.isMovieLiked(movie.imdbID) ? "tomato" : "gray"}
          />
        </Button>
      </Box>
    </Card>
  );
});
export default MovieCard;
