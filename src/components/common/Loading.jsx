import { AbsoluteCenter, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <AbsoluteCenter>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </AbsoluteCenter>
  );
};
export default Loading;
