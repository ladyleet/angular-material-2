import { Component, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
  moduleId: module.id,
  selector: 'app-lovely-people',
  templateUrl: 'lovely-people.component.html',
  styleUrls: ['lovely-people.component.css'],
  directives: [ MD_GRID_LIST_DIRECTIVES ],
  template: `
  <div>
    <h2>People who have paired or helped on this site! Thank them!</h2>
    <md-grid-list cols='4' class='light-primary-background-color'>
      <md-grid-tile><md-card>@pascalprecht</md-card></md-grid-tile>
      <md-grid-tile><md-card>@benlesh</md-card></md-grid-tile>
      <md-grid-tile><md-card>@simpulton</md-card></md-grid-tile>
      <md-grid-tile><md-card>@fbartho</md-card></md-grid-tile>
    </md-grid-list>
  </div>
  `
})
export class LovelyPeopleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
