import { Component, OnInit } from '@angular/core';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';

@Component({
  moduleId: module.id,
  selector: 'app-slide-toggle',
  templateUrl: 'slide-toggle.component.html',
  styleUrls: ['slide-toggle.component.css'],
  directives: [ MD_SLIDE_TOGGLE_DIRECTIVES ],
  template: `
  <div>
    <h2>Slide Toggle Example</h2>
      <md-slide-toggle [checked]="isChecked">
        Input Binding
      </md-slide-toggle>
  </div>
  `
})
export class SlideToggleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
