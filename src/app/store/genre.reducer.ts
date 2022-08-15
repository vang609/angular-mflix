import { createReducer, on } from '@ngrx/store';
import { setGenre } from './genre.actions';

export const initialState: string = '';

const _genreReducer = createReducer(initialState,
  on(setGenre, (state, { genre }) => genre),
);

export function genreReducer(state: any, action: any) {
  return _genreReducer(state, action);
}
