import { Component } from '@angular/core';
import { TestComponentsComponent } from './test-components';
import { NgExplainerComponent } from './ng-explainer';
import { HeaderToolbarComponent } from './header-toolbar';
import { ButtonExampleComponent } from './button-example';
import { IconExampleComponent } from './icon-example';
import { CardExampleComponent } from './card-example';
import { CheckboxExampleComponent } from './checkbox-example';

@Component({
  moduleId: module.id,
  selector: 'angular-material-2-app',
  templateUrl: 'angular-material-2.component.html',
  styleUrls: [ 'angular-material-2.component.css' ],
  directives: [
    TestComponentsComponent,
    NgExplainerComponent,
    HeaderToolbarComponent,
    ButtonExampleComponent,
    IconExampleComponent,
    CardExampleComponent,
    CheckboxExampleComponent
  ],
  template: `
    <app-header-toolbar></app-header-toolbar>

    <app-ng-explainer></app-ng-explainer>

    <div>
      <h1>These are the examples broken down into individual components</h1>
      <app-button-example></app-button-example>
      <app-icon-example></app-icon-example>
      <app-card-example></app-card-example>
      <app-checkbox-example></app-checkbox-example>
    </div>

    <div>
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </div>

    <app-test-components></app-test-components>
  `
})

export class AngularMaterial2AppComponent {

}
