import { makeAutoObservable } from "mobx";

class MovieStore {
  likedMovies = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMovie(movie) {
    if (!this.isMovieLiked(movie.imdbID)) {
      this.likedMovies.push(movie);
    }
  }

  removeMovie(movie) {
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
