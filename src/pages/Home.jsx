import MoviesGrid from "../components/movies/MoviesGrid";
import Pagination from "../components/pagination/Pagination";
import SearchBar from "../components/search/SearchBar";
import RootLayout from "../layout/RootLayout";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}?apikey=${
          import.meta.env.VITE_APP_API_KEY
        }&s=Batman&page=${currentPage}`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.Search);
      setTotalResults(data.totalResults);
    };

    fetchMoviesData();
  }, [currentPage]);

  return (
    <RootLayout>
      <SearchBar />
      {movies && <MoviesGrid movies={movies} />}
      <Pagination
        totalResultsCount={totalResults}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </RootLayout>
  );
};
export default Home;
