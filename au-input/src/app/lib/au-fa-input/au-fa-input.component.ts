import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {

  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

  get classes() {
    const cssClasses = {
      'fa': true
    }
    if (this.icon) {
      cssClasses[`fa-${this.icon}`] = true;
    }
    return cssClasses;
  }

}
