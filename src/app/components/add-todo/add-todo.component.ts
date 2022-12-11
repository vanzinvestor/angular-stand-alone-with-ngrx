import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromTodoActions } from 'src/app/store/actions';

@Component({
  standalone: true,
  selector: 'app-add-todo',
  template: `
    <form class="add-form" (ngSubmit)="onSubmit()">
      <div class="form-control">
        <label for="text">Task</label>
        <input
          type="text"
          name="text"
          [(ngModel)]="text"
          id="text"
          placeholder="Add Task"
        />
      </div>
      <div class="form-control">
        <label for="day">Day & Time</label>
        <input
          type="text"
          name="day"
          [(ngModel)]="day"
          id="day"
          placeholder="Add Date & Time"
        />
      </div>
      <div class="form-control form-control-check">
        <label for="reminder">Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          [(ngModel)]="reminder"
          id="reminder"
        />
      </div>
      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  `,
  styles: [
    `
      .add-form {
        margin-bottom: 40px;
      }
    `,
  ],
  imports: [CommonModule, FormsModule],
})
export class AddTodoComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a text');
      return;
    }

    const newTodo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.store.dispatch(fromTodoActions.createTodo({ todo: newTodo }));

    this.text = '';
    this.day = '';
    this.reminder = false;

    // Close on save
    this.store.dispatch(fromTodoActions.btnAddTodoToggle());
  }
}
