import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `
    <footer>
      <p>Copyright &copy; 2021</p>
      <a routerLink="/about">About</a>
    </footer>
  `,
  styles: [
    `
      footer {
        margin-top: 30px;
        text-align: center;
      }
    `,
  ],
  imports: [CommonModule, RouterModule],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
