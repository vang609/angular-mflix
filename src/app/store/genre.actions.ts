import { createAction, props } from '@ngrx/store';

export const setGenre = createAction(
  '[GENRE] Set Genre',
    props<{ genre: string }>()
  );
