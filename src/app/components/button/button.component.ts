import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { shadeColor } from 'src/app/utils/color.util';

@Component({
  standalone: true,
  selector: 'app-button',
  template: `
    <button
      (mouseover)="hover = true"
      (mouseleave)="hover = false"
      [ngStyle]="{
        background: hover === true ? shadeColor(color, -20) : color
      }"
      class="btn"
      (click)="onClick()"
    >
      {{ text }}
    </button>
  `,
  styles: [],
  imports: [CommonModule],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();
  hover!: boolean;
  shadeColor = shadeColor;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
