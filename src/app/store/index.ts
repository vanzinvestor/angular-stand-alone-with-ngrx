import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { fromTodoReducers } from './reducers';

export interface AppState {
  router: RouterReducerState<any>;
  [fromTodoReducers.todoFeatureKey]: fromTodoReducers.TodoState;
}

export const rootReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  [fromTodoReducers.todoFeatureKey]: fromTodoReducers.todoReducer,
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
