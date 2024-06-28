import { Box, Card, Image, Text } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
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
          bg={"white"}
          color={"#444"}
          px={"2"}
          py={"1"}
          borderRadius={"lg"}
          position={"absolute"}
          top={"2"}
          right={"2"}
        >
          {movie.Type}
        </Text>
      </Box>
    </Card>
  );
};
export default MovieCard;
