import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-card-example',
  templateUrl: 'card-example.component.html',
  styleUrls: ['card-example.component.css'],
  directives: [
    MD_CARD_DIRECTIVES
  ],
  template: `
  <div>
    <h2>card example</h2>
    <md-card>
      basic card
    </md-card>
  </div>
  `
})
export class CardExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
