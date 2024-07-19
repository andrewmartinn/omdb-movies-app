import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = [];
  likedMovies = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMovies(movies) {
    this.movies = movies;
  }

  likeMovie(movie) {
    if (!this.isMovieLiked(movie.imdbID)) {
      this.likedMovies.push(movie);
    }
  }

  unlikeMovie(movie) {
    const movieId = movie.imdbID;
    if (this.isMovieLiked(movieId)) {
      this.likedMovies = this.likedMovies.filter((m) => m.imdbID !== movieId);
    }
  }

  isMovieLiked(movieId) {
    return this.likedMovies.some((movie) => movie.imdbID === movieId);
  }

  getLikedMoviesCount() {
    return this.likedMovies.length;
  }
}

const movieStore = new MovieStore();
export default movieStore;
