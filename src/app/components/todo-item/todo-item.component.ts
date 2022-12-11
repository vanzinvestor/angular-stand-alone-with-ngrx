import { Component, Input, OnInit } from '@angular/core';
import { shadeColor } from 'src/app/utils/color.util';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITodo } from 'src/app/models/todo';
import { Store } from '@ngrx/store';
import { TodoService } from 'src/app/services/todo.service';
import { fromTodoActions } from 'src/app/store/actions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  template: ` <div
    [ngClass]="{ reminder: todo.reminder }"
    class="task"
    (dblclick)="updateTodoReminder(todo)"
  >
    <h3>
      {{ todo.text }}
      <fa-icon
        (mouseover)="hover = true"
        (mouseleave)="hover = false"
        [ngStyle]="{ color: hover === true ? shadeColor('red', -50) : 'red' }"
        [icon]="faTimes"
        (click)="deleteTodo(todo)"
      ></fa-icon>
    </h3>
    <p>{{ todo.day }}</p>
  </div>`,
  styles: [
    `
      .task {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
      }

      .task.reminder {
        border-left: 5px solid green;
      }

      .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
  imports: [CommonModule, FontAwesomeModule],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;
  hover!: boolean;
  faTimes = faTimes;
  shadeColor = shadeColor;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  deleteTodo(todo: ITodo) {
    this.store.dispatch(fromTodoActions.deleteTodo({ todo }));
  }

  updateTodoReminder(todo: ITodo) {
    const newTodo = Object.assign({}, todo, {
      reminder: !todo.reminder,
    });
    this.store.dispatch(fromTodoActions.updateTodo({ todo: newTodo }));
  }
}
