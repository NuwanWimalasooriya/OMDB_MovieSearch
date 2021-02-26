import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Movie } from "./Movie";
import { MovieDetail } from "./MovieDetails";

@Injectable()
export class MovieService {
  private selectedMovie$: Subject<Movie> = new Subject<Movie>();
  private apiKey = "c80561884707ed07e14bcbb60bbf3750";
  private omdbApiKey = "2edaf5e7";
  private imageBaseUrl = "";
  private imageSizes: { backdrop?: string[]; poster?: string[] } = {};
  public totalRecords = 0;

  constructor(private http: HttpClient) {
  }

  get currentMovie() {
    return this.selectedMovie$;
  }

  searchMovie = (title: String, page: number) => {
    const url = "http://www.omdbapi.com/?s=" + title
    + "&apikey=" + this.omdbApiKey + "&page= " + page;
    return this.http.get<any>(url).map((res: any) => {
        this.totalRecords = res.totalResults;
     return res.Search.map((result: Movie) => {
        return {
          ...result,
        };
      });
    }
    );
  }

  changeSelectedMovie(movie: Movie) {
    this.selectedMovie$.next(movie);
  }


  getMovieDetail = (movieId: String) => {
    const url = "http://www.omdbapi.com/?i=" + movieId
    + "&apikey=" + this.omdbApiKey;
    return this.http.get<any>(url).map((result: MovieDetail) => {
      return ({
        ...result,
      });
    });
  }

}
