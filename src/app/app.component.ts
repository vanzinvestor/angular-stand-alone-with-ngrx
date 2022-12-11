import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div class="container">
    <app-header></app-header><router-outlet></router-outlet
    ><app-footer></app-footer>
  </div>`,
  styles: [],
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  title = 'angular';
}
