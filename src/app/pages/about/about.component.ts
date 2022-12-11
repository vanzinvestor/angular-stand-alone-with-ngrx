import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <div>
      <h2>Task Tracker</h2>
      <h4>Version: 1.0.0</h4>
      <a routerLink="/">Go Back</a>
    </div>
  `,
  styles: [],
  imports: [CommonModule, RouterModule],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
