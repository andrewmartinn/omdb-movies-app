import { AbsoluteCenter, Text } from "@chakra-ui/react";
import Loading from "../components/common/Loading";
import MoviesGrid from "../components/movies/MoviesGrid";
import Pagination from "../components/pagination/Pagination";
import SearchBar from "../components/search/SearchBar";
import RootLayout from "../layout/RootLayout";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_API_BASE_URL}?apikey=${
            import.meta.env.VITE_APP_API_KEY
          }&s=${searchTerm}&page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        console.log(data);
        setMovies(data.Search);
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMoviesData();
  }, [currentPage, searchTerm]);

  return (
    <RootLayout>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading && <Loading />}
      {error && (
        <AbsoluteCenter>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Error fetching movies!
          </Text>
        </AbsoluteCenter>
      )}
      {!loading && !error && movies.length > 0 && (
        <>
          <MoviesGrid movies={movies} />
          <Pagination
            totalResultsCount={totalResults}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
      {!loading && !error && movies.length === 0 && (
        <AbsoluteCenter>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            No movies found!
          </Text>
        </AbsoluteCenter>
      )}
    </RootLayout>
  );
};
export default Home;
