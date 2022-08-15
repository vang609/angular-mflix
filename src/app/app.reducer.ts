import { ActionReducerMap } from '@ngrx/store';
import { Movie } from './movies/interfaces/movie';
import { genreReducer } from './store/genre.reducer';
import { movieReducer } from './store/movie.reducer';
import { toggleReducer } from './store/toggle.reducer';

export interface AppState {
  genre: string,
  toogle: boolean,
  movies: Movie[]
}


export const appReducers: ActionReducerMap<AppState> = {
  genre: genreReducer,
  toogle: toggleReducer,
  movies: movieReducer
}
