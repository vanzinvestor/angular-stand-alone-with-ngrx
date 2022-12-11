import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/models/todo';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: ITodo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ message: string }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: ITodo }>()
);

export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success',
  props<{ todo: ITodo }>()
);

export const updateTodoFailure = createAction(
  '[Todo] Update Todo Failure',
  props<{ message: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ todo: ITodo }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ todo: ITodo }>()
);

export const deleteTodoFailure = createAction(
  '[Todo] Delete Todo Failure',
  props<{ message: string }>()
);

export const btnAddTodoToggle = createAction('[Todo] Show/Close Add Todo');

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ todo: ITodo }>()
);

export const createTodoSuccess = createAction(
  '[Todo] Create Todo Success',
  props<{ todo: ITodo }>()
);

export const createTodoFailure = createAction(
  '[Todo] Create Todo Failure',
  props<{ message: string }>()
);
