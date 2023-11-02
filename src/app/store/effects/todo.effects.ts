import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { fromTodoActions } from '../actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map(
            (todos) => fromTodoActions.loadTodosSuccess({ todos }),
            catchError((error) =>
              of(fromTodoActions.loadTodosFailure({ message: error.message }))
            )
          )
        )
      )
    )
  );

  deletTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTodoActions.deleteTodo),
      map((action) => action.todo),
      mergeMap((todo) =>
        this.todoService.deleteTodo(todo).pipe(
          map(
            () => fromTodoActions.deleteTodoSuccess({ todo }),
            catchError((error) =>
              of(fromTodoActions.deleteTodoFailure({ message: error.message }))
            )
          )
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTodoActions.updateTodo),
      map((action) => action.todo),
      mergeMap((todo) =>
        this.todoService.updateTodoReminder(todo).pipe(
          map(
            () => fromTodoActions.updateTodoSuccess({ todo }),
            catchError((error) =>
              of(fromTodoActions.updateTodoFailure({ message: error.message }))
            )
          )
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTodoActions.createTodo),
      map((action) => action.todo),
      mergeMap((todo) =>
        this.todoService.addTodo(todo).pipe(
          map(
            () => fromTodoActions.createTodoSuccess({ todo }),
            catchError((error) =>
              of(fromTodoActions.createTodoFailure({ message: error.message }))
            )
          )
        )
      )
    )
  );
}
