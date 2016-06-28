import { Component, OnInit } from '@angular/core';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-input-example',
  templateUrl: 'input-example.component.html',
  styleUrls: ['input-example.component.css'],
  directives: [
    MdInput
  ],
  template: `
    <div>
      <h2>input example</h2>
        <md-card>
          <md-input placeholder="Character count (100 max)" maxLength="100" class="demo-full-width"
              value="Hello world. How are you?"
              #characterCountHintExample>
              <md-hint align="end">{{characterCountHintExample.characterCount}} / 100</md-hint>
          </md-input>
        </md-card>
    </div>
  `
})
export class InputExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
