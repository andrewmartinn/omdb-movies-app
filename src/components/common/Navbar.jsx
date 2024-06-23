import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  Switch,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Flex alignItems={"center"} gap={"1rem"}>
            <MoonIcon />
            <Switch onChange={toggleColorMode} />
            <SunIcon />
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};
export default Navbar;
