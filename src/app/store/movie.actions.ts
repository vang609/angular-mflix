import { createAction, props } from '@ngrx/store';
import { Movie } from '../movies/interfaces/movie';

export const setMovies = createAction(
  '[MOVIE] Set Movies',
    props<{ movies: Movie[] }>()
  );


export const unSetMovies = createAction('[MOVIE] unSetMovies');
