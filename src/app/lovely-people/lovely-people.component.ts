import { Component, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-lovely-people',
  templateUrl: 'lovely-people.component.html',
  styleUrls: ['lovely-people.component.css'],
  directives: [ MD_GRID_LIST_DIRECTIVES, MdIcon, MD_CARD_DIRECTIVES ],
  providers: [ MdIconRegistry ],
  template: `
    <md-card>
      <md-card-title>People who have helped along this journey</md-card-title>
      <md-card-content>
        <md-grid-list cols="5" rowHeight="150px">
          <md-grid-tile *ngFor="let human of humans" class="light-primary-background-color">
            <h2> {{human.name}}</h2>
            <md-grid-tile-footer class="dark-primary-background-color text-align-center">
              Twitter: {{human.twitter}}
            </md-grid-tile-footer>
          </md-grid-tile>
        </md-grid-list>
      </md-card-content>
    </md-card>
  `
})
export class LovelyPeopleComponent implements OnInit {

humans: Object[] = [
    { name: 'Pascal Precht', twitter: '@pascalprecht'},
    { name: 'Ben Lesh', twitter: '@benlesh' },
    { name: 'Sean Larkin', twitter: '@thelarkinn' },
    { name: 'Lukas Ruebbelke', twitter: '@simpulton' },
    { name: 'Frederic Barthelemy', twitter: '@fbartho' },
  ];

  constructor() {}

  ngOnInit() {
  }

}
