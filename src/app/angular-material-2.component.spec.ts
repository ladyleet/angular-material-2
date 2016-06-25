import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularMaterial2AppComponent } from '../app/angular-material-2.component';

beforeEachProviders(() => [AngularMaterial2AppComponent]);

describe('App: AngularMaterial2', () => {
  it('should create the app',
      inject([AngularMaterial2AppComponent], (app: AngularMaterial2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-material-2 works!\'',
      inject([AngularMaterial2AppComponent], (app: AngularMaterial2AppComponent) => {
    expect(app.title).toEqual('angular-material-2 works!');
  }));
});
