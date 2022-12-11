import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosComponent } from 'src/app/components/todos/todos.component';

@Component({
  standalone: true,
  template: `<app-todos></app-todos>`,
  styles: [],
  imports: [CommonModule, TodosComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
