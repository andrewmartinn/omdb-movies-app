import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import RootLayout from "../layout/RootLayout";

const About = () => {
  return (
    <RootLayout>
      <Box bg={useColorModeValue("#EEE", "#555")} p={6} borderRadius={"lg"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          About
        </Text>
        <Text fontSize={"xl"} mt={"4"} mb={"6"}>
          React application displays movies data using OMDB API, users can
          search for thier favourite movies sort movies by title and release
          year and also like thier favourite movies to add it to thier watch
          list. This app also comes with a light and dark theme switcher to
          switch color modes according to the user&apos; preferences
        </Text>
        <Text fontSize={"xl"}>
          Check out the{" "}
          <a href="https://www.omdbapi.com/" target="_blank">
            OMDB API
          </a>{" "}
          documentation to know more details about the API and its usage
        </Text>
      </Box>
    </RootLayout>
  );
};
export default About;
