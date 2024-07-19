import {
  Button,
  Container,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { observer } from "mobx-react-lite";

const MoviesGrid = observer(({ movies, searchTerm, handleSortChange }) => {
  return (
    <Container mt={"1rem"} mb={"4rem"} maxWidth={"6xl"} centerContent>
      <Container
        mt={"10"}
        mb={"4"}
        maxWidth={"4xl"}
        px={"8"}
        display={"flex"}
        gap={"4"}
        justifyContent={{
          base: "flex-end",
          md: "space-between",
          lg: "space-between",
        }}
        alignItems={"center"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"lg"}
          display={{ base: "none", md: "block", lg: "block" }}
        >
          Showing results for {`"${searchTerm}"`}
        </Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={"sm"}>
            Sort by
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSortChange("title-asc")}>
              Title (A-Z)
            </MenuItem>
            <MenuItem onClick={() => handleSortChange("title-desc")}>
              Title (Z-A)
            </MenuItem>
            <MenuItem onClick={() => handleSortChange("year-asc")}>
              Year (Oldest to Newest)
            </MenuItem>
            <MenuItem onClick={() => handleSortChange("year-desc")}>
              Year (Newest to Oldest)
            </MenuItem>
          </MenuList>
        </Menu>
      </Container>
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
});
export default MoviesGrid;
