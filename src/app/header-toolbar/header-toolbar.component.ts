import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-header-toolbar',
  templateUrl: 'header-toolbar.component.html',
  styleUrls: ['header-toolbar.component.css'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MdIcon
  ],
  providers: [ MdIconRegistry ],
  template: `
    <md-toolbar class='primary-background-color white-text'>
      <button md-icon-button>
        <md-icon>menu</md-icon>
      </button>
      MY BEAUTIFUL ANGULAR MATERIAL 2 SITE IT'S ALIIIIIIIIIIIVVVVVEEEEEE
    </md-toolbar>
  `
})
export class HeaderToolbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
