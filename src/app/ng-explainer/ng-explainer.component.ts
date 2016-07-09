import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';


@Component({
  moduleId: module.id,
  selector: 'app-ng-explainer',
  templateUrl: 'ng-explainer.component.html',
  styleUrls: ['ng-explainer.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ],
  template: `
  <div>
    <md-card>
      <md-card-title>Willkommen!</md-card-title>
      <md-card-content>
        <p>
          This site gives you a brief example of how to use Angular Material 2! Hopefully it serves as a useful reference point for you. :)
        </p>
      </md-card-content>
    </md-card>
  </div>
  `
})
export class NgExplainerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
