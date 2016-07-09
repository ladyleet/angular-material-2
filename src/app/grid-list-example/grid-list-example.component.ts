import { Component, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
  moduleId: module.id,
  selector: 'app-grid-list-example',
  templateUrl: 'grid-list-example.component.html',
  styleUrls: ['grid-list-example.component.css'],
  directives: [
    MD_GRID_LIST_DIRECTIVES
  ],
  template: `
    <div>
      <h2>grid-list example</h2>
      <md-grid-list cols='4' class='light-primary-background-color'>
        <md-grid-tile>One</md-grid-tile>
        <md-grid-tile>Two</md-grid-tile>
        <md-grid-tile>Three</md-grid-tile>
        <md-grid-tile>Four</md-grid-tile>
      </md-grid-list>
    </div>
  `
})
export class GridListExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
