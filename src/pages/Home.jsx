import { AbsoluteCenter, Text } from "@chakra-ui/react";
import Loading from "../components/common/Loading";
import MoviesGrid from "../components/movies/MoviesGrid";
import Pagination from "../components/pagination/Pagination";
import SearchBar from "../components/search/SearchBar";
import RootLayout from "../layout/RootLayout";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import movieStore from "../store/movieStore";

const Home = observer(() => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [sortOption, setSortOption] = useState("title-asc");

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
        movieStore.setMovies(data.Search);
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMoviesData();
  }, [currentPage, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const getSortedMovies = (movies) => {
    const sortedMovies = [...movies];

    switch (sortOption) {
      case "title-asc":
        sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
        break;
      case "title-desc":
        sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
        break;
      case "year-asc":
        sortedMovies.sort((a, b) => {
          const yearA = parseInt(a.Year.split("-")[0]);
          const yearB = parseInt(b.Year.split("-")[0]);
          return yearA - yearB;
        });
        break;
      case "year-desc":
        sortedMovies.sort((a, b) => {
          const yearA = parseInt(a.Year.split("-")[0]);
          const yearB = parseInt(b.Year.split("-")[0]);
          return yearB - yearA;
        });
        break;
      default:
        break;
    }

    return sortedMovies;
  };

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
      {!loading && !error && movieStore.movies.length > 0 && (
        <>
          <MoviesGrid
            movies={getSortedMovies(movieStore.movies)}
            handleSortChange={handleSortChange}
            searchTerm={searchTerm}
          />
          <Pagination
            totalResultsCount={totalResults}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
      {!loading && !error && movieStore.movies.length === 0 && (
        <AbsoluteCenter>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            No movies found!
          </Text>
        </AbsoluteCenter>
      )}
    </RootLayout>
  );
});
export default Home;
