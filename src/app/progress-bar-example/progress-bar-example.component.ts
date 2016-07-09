import { Component, OnInit } from '@angular/core';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';

@Component({
  moduleId: module.id,
  selector: 'app-progress-bar-example',
  templateUrl: 'progress-bar-example.component.html',
  styleUrls: ['progress-bar-example.component.css'],
  directives: [
    MD_PROGRESS_BAR_DIRECTIVES
  ],
  template: `
    <div>
      <h2>progress-bar example</h2>
        <md-progress-bar mode="indeterminate" color="primary"></md-progress-bar>
    </div>
  `
})
export class ProgressBarExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
