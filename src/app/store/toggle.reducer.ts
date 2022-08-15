import { createReducer, on } from '@ngrx/store';
import { switchToggle } from './toggle.actions';

export const initialState: boolean = false;

const _toggleReducer = createReducer(initialState,
  on(switchToggle, (state) => !state),
);

export function toggleReducer(state: any, action: any) {
  return _toggleReducer(state, action);
}
