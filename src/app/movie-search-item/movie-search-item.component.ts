import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../Movie";
import { MovieService } from "../movie-service.service";

@Component({
  selector: "app-movie-search-item",
  templateUrl: "./movie-search-item.component.html",
  styleUrls: ["./movie-search-item.component.css"]
})
export class MovieSearchItemComponent implements OnInit {

  @Input() movie: Movie = {};
  @Input() index: number;
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  backdropStyle = () => {
    console.log(this.movie.posterUrl);
    return {
      background: `linear-gradient(180deg, rgba(0,0,0,.7), transparent), url(${
        this.movie.posterUrl
      })`,
      "background-size": "cover"
    };
  }

  animationDelay = () => ({
    "animation-delay": `${this.index * 0.15}s`
  })

  getMovieDetail = (movie) => {
    this.movieService.getMovieDetail(movie.imdbID);
  }

}
