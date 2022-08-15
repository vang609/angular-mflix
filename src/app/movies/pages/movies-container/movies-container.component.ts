import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../../store/movie.actions';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {

  genres: string = '';
  public movies: Movie[] = [];

  constructor(private store: Store<AppState>) {
    this.movies = JSON.parse(localStorage.getItem('movies')!) || [];
    if(this.movies.length > 0) this.store.dispatch( actions.setMovies({ movies: this.movies }) );
  }


  ngOnInit(): void {
    this.store.subscribe( ({ genre, movies }) => {
      if(!genre) return;

      console.log('movie container', movies);
      let moviesArray: any = [];
      for (const key in movies) {
        moviesArray = movies[key];
      }
      if(moviesArray.length > 0) this.movies = moviesArray;
      localStorage.setItem('movies', JSON.stringify( this.movies) );
     });
  }

}
