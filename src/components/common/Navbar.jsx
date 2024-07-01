import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  Switch,
  useColorMode,
  Link as ChakraLink,
  Button,
  Circle,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import movieStore from "../../store/movieStore";

const Navbar = observer(() => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <Container
        maxW={"8xl"}
        px={"2rem"}
        py={"1rem"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ChakraLink
          as={Link}
          to="/"
          _hover={{ textDecoration: "none" }}
          fontWeight={"bold"}
          fontSize={"xl"}
        >
          OMDB MOVIES
        </ChakraLink>
        <HStack gap={"3rem"}>
          <ChakraLink
            as={Link}
            fontWeight={"bold"}
            to="/about"
            _hover={{ textDecoration: "none" }}
          >
            About
          </ChakraLink>
          <Box position={"relative"}>
            <Button as={Link} to={"/likes"} size={"md"}>
              <FaHeart size={"16px"} />
            </Button>
            <Circle
              position={"absolute"}
              top={"-1"}
              right={"-1"}
              size="20px"
              fontSize={"13px"}
              bg="tomato"
              color="white"
            >
              <Center>{movieStore.getLikedMoviesCount()}</Center>
            </Circle>
          </Box>
          <Flex alignItems={"center"} gap={"1rem"}>
            <MoonIcon />
            <Switch onChange={toggleColorMode} />
            <SunIcon />
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
});
export default Navbar;
