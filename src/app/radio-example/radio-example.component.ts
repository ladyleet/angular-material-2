import { Component, OnInit } from '@angular/core';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';

@Component({
  moduleId: module.id,
  selector: 'app-radio-example',
  templateUrl: 'radio-example.component.html',
  styleUrls: ['radio-example.component.css'],
  directives: [ MD_RADIO_DIRECTIVES ],
  template: `
  <div>
    <h2>Radio Example</h2>
    <p>Coming soon!</p>
  </div>
  `
})
export class RadioExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
