 import { MovieDetail } from "./MovieDetails";

export class Movie {
  Title?: string | null;
  Year?: string | null;
  Type?: string;
  posterUrl?: string | null;
  Poster?: string | null;
  imdbID?: string  |null;
  movieDetail?: MovieDetail;

  constructor () {
    this.movieDetail = new MovieDetail();
  }
}

