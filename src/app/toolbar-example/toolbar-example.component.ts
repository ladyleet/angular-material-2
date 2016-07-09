import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-toolbar-example',
  templateUrl: 'toolbar-example.component.html',
  styleUrls: ['toolbar-example.component.css'],
  directives: [ MD_TOOLBAR_DIRECTIVES ],
  template: `
    <div>
      <h2>toolbar example</h2>
      <md-toolbar>
        <span>First Row</span>

        <md-toolbar-row>
          <span>Second Row</span>
        </md-toolbar-row>

        <md-toolbar-row>
          <span>Third Row</span>
        </md-toolbar-row>
      </md-toolbar>
    </div>
  `
})
export class ToolbarExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
