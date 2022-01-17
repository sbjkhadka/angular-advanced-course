import { Directive, HostListener } from '@angular/core';

// Selector is written same as au-fa-input plus input
// this means this directive is applied to all the
// input element nested inside au-fa-input component

@Directive({
  selector: 'au-fa-input input'
})
export class InputRefDirective {

  focus = false
  constructor() {
  }

  @HostListener('focus') onFocus() {
    this.focus = true;
  }

  @HostListener('blur') onBlur() {
    this.focus = false;
  }

}
