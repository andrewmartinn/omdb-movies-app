import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

const RootLayout = ({ children }) => {
  const bgColor = useColorModeValue("#FFFAFA", "#28282B");
  const textColor = useColorModeValue("#555", "white");
  return (
    <Box bg={bgColor} color={textColor}>
      <Navbar />
      <Box minH={"100vh"} w={"100%"}>
        <Container maxW={"8xl"} px={"2rem"} py={"4rem"}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
export default RootLayout;
