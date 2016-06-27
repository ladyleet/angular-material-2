import { Component, OnInit } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-icon-example',
  templateUrl: 'icon-example.component.html',
  styleUrls: ['icon-example.component.css'],
  directives: [
    MdIcon
  ],
  providers: [
    MdIconRegistry
  ],
  template: `
    <div>
      <h2>icon example</h2>
      <button md-raised-button class='dark-primary-background-color white-text'><md-icon>home</md-icon></button>
    </div>
  `
})
export class IconExampleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
