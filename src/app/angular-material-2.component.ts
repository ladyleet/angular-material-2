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
import { RadioExampleComponent } from './radio-example';
import { SlideToggleComponent } from './slide-toggle';
import { TabsExampleComponent } from './tabs-example';
import { ToolbarExampleComponent } from './toolbar-example';
import { LovelyPeopleComponent } from './lovely-people';



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
    ProgressCircleExampleComponent,
    RadioExampleComponent,
    SlideToggleComponent,
    TabsExampleComponent,
    ToolbarExampleComponent,
    LovelyPeopleComponent
  ],
  template: `
    <app-header-toolbar></app-header-toolbar>
    <a routerLink="/contributors">Contributors</a>
    <router-outlet></router-outlet>
    <app-ng-explainer></app-ng-explainer>
    <md-card>
      <a routerLink="/checkbox">Checkbox</a>
      <a routerLink="/button">Button</a>
      <a routerLink="/icon">Icons</a>
      <a routerLink="/card">Card</a>
      <a routerLink="/grid-list">Grid List</a>
      <a routerLink="/input">Input</a>
      <a routerLink="/list">List</a>
      <a routerLink="/progress-bar">Progress Bar</a>
      <a routerLink="/progress-circle">Progress Circle</a>
      <a routerLink="/radio">Radio</a>
      <a routerLink="/slide-toggle">Slide Toggle</a>
      <a routerLink="/tabs">Tabs</a>
      <a routerLink="/toolbar">Toolbar</a>
      <router-outlet></router-outlet>
    </md-card>

    <app-lovely-people></app-lovely-people>

  `
})

export class AngularMaterial2AppComponent {

}
