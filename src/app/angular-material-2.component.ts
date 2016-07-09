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
    ToolbarExampleComponent
  ],
  template: `
  <div class="row">
 <div class="col s12 m6">
   <div class="card blue-grey darken-1">
     <div class="card-content white-text">
       <span class="card-title">Card Title</span>
       <p>I am a very simple card. I am good at containing small bits of information.
       I am convenient because I require little markup to use effectively.</p>
     </div>
     <div class="card-action">
       <a href="#">This is a link</a>
       <a href="#">This is a link</a>
     </div>
   </div>
 </div>
</div>
    <app-header-toolbar></app-header-toolbar>
    <a routerLink="/checkbox">Checkbox Example</a>
    <a routerLink="/button">Button Example</a>
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
    <a routerLink="/contributors">Contributors</a>
    <router-outlet></router-outlet>
    <app-ng-explainer></app-ng-explainer>

    <div>
      <h1>Contributors</h1>
      <app-lovely-people></app-lovely-people>
    </div>
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
      <app-slide-toggle></app-slide-toggle>
      <app-tabs-example></app-tabs-example>
      <app-toolbar-example></app-toolbar-example>
    </div>
  `
})

export class AngularMaterial2AppComponent {

}
