import { Component, OnInit } from '@angular/core';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'app-progress-circle-example',
  templateUrl: 'progress-circle-example.component.html',
  styleUrls: ['progress-circle-example.component.css'],
  directives: [
    MD_PROGRESS_CIRCLE_DIRECTIVES
  ],
  template: `
    <div>
      <h2>progress-circle example</h2>
      <md-progress-circle mode="indeterminate" color="warn"></md-progress-circle>
    </div>
  `
})
export class ProgressCircleExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
