import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TestComponentsComponent } from './test-components';
import { NgExplainerComponent } from './ng-explainer';
import { HeaderToolbarComponent } from './header-toolbar';
import { ButtonExampleComponent } from './button-example';
import { IconExampleComponent } from './icon-example';
import { CardExampleComponent } from './card-example';
import { CheckboxExampleComponent } from './checkbox-example';
import { GridListExampleComponent } from './grid-list-example';
import { InputExampleComponent } from './input-example';
import { ListExampleComponent } from './list-example';
import { ProgressBarExampleComponent } from './progress-bar-example';
import { ProgressCircleExampleComponent } from './progress-circle-example';

@Component({
  moduleId: module.id,
  selector: 'angular-material-2-app',
  templateUrl: 'angular-material-2.component.html',
  styleUrls: [ 'angular-material-2.component.css' ],
  directives: [
    ROUTER_DIRECTIVES,
    TestComponentsComponent,
    NgExplainerComponent,
    HeaderToolbarComponent,
    ButtonExampleComponent,
    IconExampleComponent,
    CardExampleComponent,
    CheckboxExampleComponent,
    GridListExampleComponent,
    InputExampleComponent,
    ListExampleComponent,
    ProgressBarExampleComponent,
    ProgressCircleExampleComponent
  ],
  template: `
    <app-header-toolbar></app-header-toolbar>
    <a routerLink="/checkbox">Checkbox Example</a>
    <a routerLink="/button">Button Example</a>
    <router-outlet></router-outlet>
    <app-ng-explainer></app-ng-explainer>

    <div>
      <h1>These are the examples broken down into individual components</h1>
      <app-button-example></app-button-example>
      <app-icon-example></app-icon-example>
      <app-card-example></app-card-example>
      <app-checkbox-example></app-checkbox-example>
      <app-grid-list-example></app-grid-list-example>
      <app-input-example></app-input-example>
      <app-list-example></app-list-example>
      <app-progress-bar-example></app-progress-bar-example>
      <app-progress-circle-example></app-progress-circle-example>
    </div>

    <div>
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </div>

    <app-test-components></app-test-components>

  `
})

export class AngularMaterial2AppComponent {

}
