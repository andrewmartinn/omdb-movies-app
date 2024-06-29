import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

const Pagination = ({ totalResultsCount, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalResultsCount / 10);

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={"4"}>
      <Button onClick={handlePrev} disabled={currentPage === 1}>
        <ChevronLeftIcon />
        Previous
      </Button>
      <Button>{currentPage}</Button>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};
export default Pagination;
