import { Component } from '@angular/core';
import { TestComponentsComponent } from './test-components'

@Component({
  moduleId: module.id,
  selector: 'angular-material-2-app',
  templateUrl: 'angular-material-2.component.html',
  styleUrls: [ 'angular-material-2.component.css' ],
  directives: [
    TestComponentsComponent
  ],
  template: `
    <h2>{{title}}</h2>
    <div>hello there</div>
    <app-test-components></app-test-components>
  `
})

export class AngularMaterial2AppComponent {
  title = 'angular-material-2 works!'
}
