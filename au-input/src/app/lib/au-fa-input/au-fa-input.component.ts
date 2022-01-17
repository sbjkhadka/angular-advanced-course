import {AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import { InputRefDirective } from './common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input() icon: string;
  // @ContentChild('input', {static: false }) input: HTMLInputElement;
  @ContentChild(InputRefDirective, {static: false }) input: InputRefDirective;

  constructor() { }

  ngAfterContentInit(): void {
    if(!this.input) {
      console.error('Input not present');
    }
  }

  get classes() {
    const cssClasses = {
    }
    if (this.icon) {
      cssClasses[`fa-${this.icon}`] = true;
    }
    return cssClasses;
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

}
