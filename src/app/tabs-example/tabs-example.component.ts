import { Component, OnInit } from '@angular/core';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

@Component({
  moduleId: module.id,
  selector: 'app-tabs-example',
  templateUrl: 'tabs-example.component.html',
  styleUrls: ['tabs-example.component.css'],
  directives: [ MD_TABS_DIRECTIVES ],
  template: `
    <div>
      <h2>tabs example</h2>
      <md-tab-group>
        <md-tab>
          <template md-tab-label>One</template>
          <template md-tab-content>
            <h1>Some tab content</h1>
            <p>...</p>
          </template>
        </md-tab>
        <md-tab>
          <template md-tab-label>Two</template>
          <template md-tab-content>
            <h1>Some more tab content</h1>
            <p>...</p>
          </template>
        </md-tab>
      </md-tab-group>
    </div>
  `
})
export class TabsExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
