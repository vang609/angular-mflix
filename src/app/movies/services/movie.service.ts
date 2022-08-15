import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { movie_mocks } from '../../../assets/jsons/movie_mocks';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../store/movie.actions';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies: Movie[] = [];
  private movies: Movie[] = [];
  private sbGenres = new BehaviorSubject('');
  genres = this.sbGenres.asObservable();
  private sbToggle = new BehaviorSubject(false);
  toggle = this.sbToggle.asObservable();


  constructor(private store: Store<AppState>) {
    movie_mocks.map((item) => {
      const {
         fullplot,
         writers,
        _id,
        awards,
        cast,
        genres,
        imdb,
        languages,
        plot,
        poster,
        title,
        year
      } = item;

      this._movies.push({
         writers,
        _id,
        awards,
        cast,
        fullplot,
        genres,
        imdb,
        languages,
        plot,
        poster,
        title,
        year
      });
    });
  }

  getMovies(): Movie[] {
    return this._movies;
  }

  getMoviesByGenres(genres: string): Movie[] {
    this.movies = [];
    this._movies.map((movie) => {
      if (movie.genres?.includes(genres)) this.movies.push(movie);
    });
    return this.movies;
  }

  getMovieByID(id: string): Movie {
    this.movies = [];
    const movie = this._movies.find((movie) => movie._id === id);
    return movie!;
  }

  setGenres(genres: string) {
    this.sbGenres.next(genres);
  }

  fillMovies() {
    this.store.subscribe( ({ genre }) => {
      if(!genre) return;

      this.movies = genre.toLocaleUpperCase() === 'ALL'? this.getMovies() : this.getMoviesByGenres(genre);
     });
    this.store.dispatch(actions.setMovies({ movies: this.movies }));
  }

}
