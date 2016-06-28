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
    <md-card class="light-primary-background-color white-text">
      <md-card-header>
        <md-card-title><h3>This is a list of to dos. Using this as a checklist and a way to organize thoughts and explain this app.</h3></md-card-title>
        <md-card-subtitle><h4>List below</h4></md-card-subtitle>
      </md-card-header>
      <md-card-content>
        <md-list>
          <md-list-item>* Make the format and app itself Material friendly</md-list-item>
          <md-list-item>* The app should give people a guide as to how to use material design.</md-list-item>
          <md-list-item>* Separate out each component into its own page with code examples and full documentation. Need to decide what pieces of each componet need to be explained.</md-list-item>
          <md-list-item>* Need to create and link to my starter repo.</md-list-item>
          <md-list-item>* Add reference sites I love like materialpalette.com</md-list-item>
          <md-list-item>* Deploy the actual app using firebase maybe?</md-list-item>
          <md-list-item>* People I've paired with on this app - @fbartho, @benlesh, @simpulton, @pascalprecht</md-list-item>
          <md-list-item>* Update the individual components of Angular Material2 readme files to have consistency of the directies and imports.</md-list-item>
        </md-list>
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
