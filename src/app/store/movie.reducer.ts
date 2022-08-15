import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movies/interfaces/movie';
import { setMovies, unSetMovies } from './movie.actions';

export const initialState: Movie[] = [];

const _movieReducer = createReducer(initialState,

  on( setMovies, (state, { movies }) => ({ ...state, movies: movies  })),
  on( unSetMovies, state => ({ ...state, movies: []  })),

);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action);
}
