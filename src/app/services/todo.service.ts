import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo } from '../models/todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>(`${environment.apiUrl}/todos`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  deleteTodo(todo: ITodo): Observable<ITodo> {
    return this.http
      .delete<ITodo>(`${environment.apiUrl}/todos/${todo.id}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  updateTodoReminder(todo: ITodo): Observable<ITodo> {
    return this.http
      .put<ITodo>(`${environment.apiUrl}/todos/${todo.id}`, todo, httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http
      .post<ITodo>(`${environment.apiUrl}/todos`, todo, httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
