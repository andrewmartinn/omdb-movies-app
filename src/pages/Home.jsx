import MoviesGrid from "../components/movies/MoviesGrid";
import SearchBar from "../components/search/SearchBar";
import RootLayout from "../layout/RootLayout";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}?apikey=${
          import.meta.env.VITE_APP_API_KEY
        }&s=Batman`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.Search);
    };

    fetchMoviesData();
  }, []);

  return (
    <RootLayout>
      <SearchBar />
      {movies && <MoviesGrid movies={movies} />}
    </RootLayout>
  );
};
export default Home;
