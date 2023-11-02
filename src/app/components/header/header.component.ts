import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromTodoActions } from 'src/app/store/actions';
import {
  fromRouterSelectors,
  fromTodoSelectors,
} from 'src/app/store/selectors';
import { ButtonComponent } from '../button/button.component';
import { AppState } from 'src/app/store';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header>
      <h1>{{ title }}</h1>
      <app-button
        *ngIf="(showAddBtn$ | async) === '/'"
        color="{{ (showAddTodo$ | async) ? 'red' : 'green' }}"
        text="{{ (showAddTodo$ | async) ? 'Close' : 'Add' }}"
        (btnClick)="toggleAddTodo()"
      ></app-button>
    </header>
  `,
  styles: [
    `
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
    `,
  ],
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo Tracker';
  showAddTodo$!: Observable<boolean>;
  showAddBtn$!: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.showAddTodo$ = this.store.select(fromTodoSelectors.selectShowAddTodo);
    this.showAddBtn$ = this.store.select(fromRouterSelectors.getCurrentRoute);
  }

  ngOnInit(): void {}

  toggleAddTodo() {
    this.store.dispatch(fromTodoActions.btnAddTodoToggle());
  }
}
