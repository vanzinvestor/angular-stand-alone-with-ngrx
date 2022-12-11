import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromTodoReducers } from '../reducers';

export const selectFeatureTodos =
  createFeatureSelector<fromTodoReducers.TodoState>(
    fromTodoReducers.todoFeatureKey
  );

export const selectTodos = createSelector(
  selectFeatureTodos,
  (state: fromTodoReducers.TodoState) => state.todos
);

export const selectShowAddTodo = createSelector(
  selectFeatureTodos,
  (state: fromTodoReducers.TodoState) => state.showAddTodo
);
