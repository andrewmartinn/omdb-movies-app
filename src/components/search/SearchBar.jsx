import { Search2Icon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };
  return (
    <Container centerContent>
      <VStack w={"100%"} gap={"4"}>
        <Heading>OMDB Movies</Heading>
        <Text>Search for movies and series</Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <InputGroup size={"lg"} onSubmit={handleSubmit}>
            <Input
              placeholder="Enter movie or series name..."
              borderRadius={"lg"}
              focusBorderColor={useColorModeValue("#EEE", "#333")}
              _focus={{
                border: `1px solid ${useColorModeValue("#EEE", "#333")}`,
              }}
              border={`1px solid ${useColorModeValue("#EEE", "#333")}`}
              value={text}
              onChange={(e) => setText(e.target.value)}
              fontSize={{ base: "sm", md: "lg" }}
            />
            <InputRightElement>
              <IconButton
                mr={"2"}
                height={"70%"}
                icon={<Search2Icon />}
                onClick={handleSubmit}
              />
            </InputRightElement>
          </InputGroup>
        </form>
      </VStack>
    </Container>
  );
};
export default SearchBar;
