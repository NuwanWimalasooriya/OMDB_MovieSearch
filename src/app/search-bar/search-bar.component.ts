import { MovieService } from "./../movie-service.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "../Movie";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";


@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  searchResults: Movie[] = [];
  search = "";
  p = 1;
  result: Object = null;
  search$: Subject<String> = new Subject<String>();
  fetching = false;
  showingMovie = false;
  @Input() currentMovie: Movie;
  @Output() startNewSearch = new EventEmitter();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.search$
      .debounceTime(500)
      .map(query => {
        this.fetching = true;
        return query;
      })
      .subscribe(this.searchQuery.bind(this));
  }

  searchQuery = (query: string, page: number) => {
    console.log("Hello", query, page);
    this.showingMovie = false;
    if (query.length > 0) {
      this.movieService.searchMovie(query, page).subscribe(results => {
        this.fetching = true;
        this.searchResults = results;
        this.p = page;
      });
    } else {
      this.fetching = false;
      this.searchResults = [];
    }
  }

  searchMovie(title: String) {
        }

  setCurrentMovie(movie: Movie) {
    let selectedMovie = null;
    if (movie !== undefined) {
      this.fetching = true;
      this.movieService.getMovieDetail(movie.imdbID).subscribe(results => {
      this.showingMovie = true;
      selectedMovie = this.searchResults.filter(a => a.imdbID === movie.imdbID);
      selectedMovie = results;
      console.log("Hello", selectedMovie);
      });
    } else {
      this.fetching = false;
    }
  }
}
