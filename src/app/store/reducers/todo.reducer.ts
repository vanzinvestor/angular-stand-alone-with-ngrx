import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from 'src/app/models/todo';
import { fromTodoActions } from '../actions';

export const todoFeatureKey = 'todos';

export enum Status {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface TodoState {
  todos: ITodo[] | [];
  status: Status;
  message: string | null;
  showAddTodo: boolean;
}

export const initialState: TodoState = {
  todos: [],
  status: Status.pending,
  message: null,
  showAddTodo: false,
};

export const todoReducer = createReducer(
  initialState,
  on(
    fromTodoActions.loadTodos,
    fromTodoActions.deleteTodo,
    fromTodoActions.updateTodo,
    fromTodoActions.createTodo,
    (state, payload) => ({
      ...state,
      status: Status.loading,
    })
  ),
  on(fromTodoActions.loadTodosSuccess, (state, payload) => ({
    ...state,
    status: Status.success,
    todos: payload.todos,
  })),
  on(fromTodoActions.deleteTodoSuccess, (state, payload) => ({
    ...state,
    status: Status.success,
    todos: state.todos.filter((todo) => todo.id !== payload.todo.id),
  })),
  on(fromTodoActions.updateTodoSuccess, (state, payload) => ({
    ...state,
    status: Status.success,
    todos: state.todos.map((todo) =>
      todo.id === payload.todo.id ? payload.todo : todo
    ),
  })),
  on(fromTodoActions.createTodoSuccess, (state, payload) => ({
    ...state,
    status: Status.success,
    todos: [...state.todos, payload.todo],
  })),
  on(fromTodoActions.btnAddTodoToggle, (state, payload) => ({
    ...state,
    showAddTodo: !state.showAddTodo,
  })),
  on(
    fromTodoActions.loadTodosFailure,
    fromTodoActions.deleteTodoFailure,
    fromTodoActions.updateTodoFailure,
    fromTodoActions.createTodoFailure,
    (state, payload) => ({
      ...state,
      status: Status.error,
      message: payload.message,
    })
  )
);
