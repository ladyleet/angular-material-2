import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MdInput } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-test-components',
  templateUrl: 'test-components.component.html',
  styleUrls: ['test-components.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MdIcon,
    MD_CARD_DIRECTIVES,
    MdCheckbox,
    MD_GRID_LIST_DIRECTIVES,
    MdInput,
    MD_LIST_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_SLIDE_TOGGLE_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ],
  providers: [ MdIconRegistry ],
  template: `
      <div>
        <h1>The Examples</h1>
      </div>
      <div>
        <h2>button example</h2>
        <button md-raised-button color='primary'>thisis a button</button>
      </div>

      <div>
        <h2>icon example</h2>
        <button md-raised-button color='primary'><md-icon>home</md-icon></button>
      </div>

      <div>
        <h2>card example</h2>
        <md-card>
          basic card
        </md-card>
      </div>

      <div>
        <h2>checkbox example</h2>
            <md-checkbox [checked]="true">I come before my label</md-checkbox>
      </div>

      <div>
        <h2>grid-list example</h2>
        <md-grid-list cols="4" [style.background]="'lightblue'">
          <md-grid-tile>One</md-grid-tile>
          <md-grid-tile>Two</md-grid-tile>
          <md-grid-tile>Three</md-grid-tile>
          <md-grid-tile>Four</md-grid-tile>
        </md-grid-list>
      </div>

      <div>
        <h2>input example</h2>
          <md-card>
            <md-input placeholder="Character count (100 max)" maxLength="100" class="demo-full-width"
                value="Hello world. How are you?"
                #characterCountHintExample>
                <md-hint align="end">{{characterCountHintExample.characterCount}} / 100</md-hint>
            </md-input>
          </md-card>
      </div>

      <div>
        <h2>list example</h2>
          <md-card>
            <md-list>
              <md-list-item> Pepper </md-list-item>
              <md-list-item> Salt </md-list-item>
              <md-list-item> Paprika </md-list-item>
            </md-list>
          </md-card>
      </div>

      <div>
        <h2>progress-bar example</h2>
          <md-progress-bar mode="indeterminate" color="primary"></md-progress-bar>
      </div>

      <div>
        <h2>progress-circle example</h2>
        <md-progress-circle mode="indeterminate" color="warn"></md-progress-circle>
      </div>

      <div>
        <h2>radio example</h2>
        for some reason this breaks things like styling and alyout. not sure why. leaving for now.
      </div>

      <div>
        <h2>sidenav example</h2>
        meh hold off for now.
      </div>

      <div>
        <h2>Slide Toggle Example</h2>
          <md-slide-toggle [checked]="isChecked">
            Input Binding
          </md-slide-toggle>
      </div>

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
      </div>`
})
export class TestComponentsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
