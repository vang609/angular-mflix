import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { Subscription } from 'rxjs';
import { MenuFlagsService } from '../../services/menu-flags.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {

  subscription!: Subscription;
  genres: string = '';

  constructor(private movieService: MovieService) { }

  public movies: Movie[] = [];
  isToggle!: boolean;

  ngOnInit(): void {
    this.subscription = this.movieService.genres.subscribe(genres => this.fillMovies(genres));
  }

  fillMovies(genres: string) {
    this.movies = genres.toLocaleUpperCase() === 'ALL'? this.movieService.getMovies() : this.movieService.getMoviesByGenres(genres);
    console.log(this.movies);
    if(this.movies.length >= 0) this.movieService.setToggle(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
