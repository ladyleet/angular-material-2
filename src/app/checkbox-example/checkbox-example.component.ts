import { Component, OnInit } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-checkbox-example',
  templateUrl: 'checkbox-example.component.html',
  styleUrls: ['checkbox-example.component.css'],
  directives: [
    MdCheckbox
  ],
  template: `
    <div>
      <h2>Checkbox Example</h2>
      <md-checkbox [checked]="true">I come before my label</md-checkbox>
    </div>
  `
})
export class CheckboxExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
