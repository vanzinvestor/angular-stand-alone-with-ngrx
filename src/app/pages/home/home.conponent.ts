import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `<h1>Hello Angular</h1>`,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
