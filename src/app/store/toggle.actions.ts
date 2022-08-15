import { createAction, props } from '@ngrx/store';

export const switchToggle = createAction(
  '[TOGGLE] Switch Toggle',
    props<{ isToggle: boolean }>()
  );
