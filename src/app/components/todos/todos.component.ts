import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTodoActions } from 'src/app/store/actions';
import { fromTodoSelectors } from 'src/app/store/selectors';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  standalone: true,
  selector: 'app-todos',
  template: `
    <app-add-todo *ngIf="showAddTodo$ | async"></app-add-todo>
    <app-todo-item
      *ngFor="let todo of todos$ | async"
      [todo]="todo"
    ></app-todo-item>
  `,
  styles: [],
  imports: [CommonModule, AddTodoComponent, TodoItemComponent],
})
export class TodosComponent implements OnInit {
  todos$ = this.store.select(fromTodoSelectors.selectTodos);
  showAddTodo$ = this.store.select(fromTodoSelectors.selectShowAddTodo);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromTodoActions.loadTodos());
  }
}
