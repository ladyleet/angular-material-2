import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-list-example',
  templateUrl: 'list-example.component.html',
  styleUrls: ['list-example.component.css'],
  directives: [
    MD_LIST_DIRECTIVES
  ],
  template: `
    <div>
      <h2>list example</h2>
        <md-card>
          <md-list>
            <md-list-item> Salt &amp; Pepper </md-list-item>
            <md-list-item> Lovely Lavender </md-list-item>
            <md-list-item> Nomnomnom </md-list-item>
          </md-list>
        </md-card>
    </div>
  `
})
export class ListExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
