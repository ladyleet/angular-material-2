import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-button-example',
  templateUrl: 'button-example.component.html',
  styleUrls: ['button-example.component.css'],
  directives: [MD_BUTTON_DIRECTIVES],
  template: `
    <div>
      <h2 class='light-primary-header'>button example</h2>
      <button md-raised-button color='primary'>thisis a button</button>
    </div>
    <div>
      <p>
        This also serves as a template for what each component doc should have.
      </p>
      <ol>
        <li>the plinkr maybe? maybe not?</li>
        <li>imports and directives</li>
        <li>example code and example component</li>
      </ol>
    </div>
  `
})
export class ButtonExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
