import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTodoActions } from 'src/app/store/actions';
import { fromTodoSelectors } from 'src/app/store/selectors';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models/todo';
import { AppState } from 'src/app/store';
import { Status } from 'src/app/store/reducers/todo.reducer';

@Component({
  standalone: true,
  selector: 'app-todos',
  template: `
    <app-add-todo *ngIf="showAddTodo$ | async"></app-add-todo>
    <div class="center" *ngIf="(statusTodo$ | async) === loading">
      <div class="loader"></div>
    </div>
    <app-todo-item
      *ngFor="let todo of todos$ | async"
      [todo]="todo"
    ></app-todo-item>
  `,
  styles: [],
  imports: [CommonModule, AddTodoComponent, TodoItemComponent],
})
export class TodosComponent implements OnInit {
  loading = Status.loading;
  todos$!: Observable<ITodo[]>;
  showAddTodo$!: Observable<boolean>;
  statusTodo$!: Observable<Status>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(fromTodoSelectors.selectTodos);
    this.showAddTodo$ = this.store.select(fromTodoSelectors.selectShowAddTodo);
    this.showAddTodo$ = this.store.select(fromTodoSelectors.selectShowAddTodo);
    this.statusTodo$ = this.store.select(fromTodoSelectors.selectStatusTodo);
  }

  ngOnInit(): void {
    this.store.dispatch(fromTodoActions.loadTodos());
  }
}
