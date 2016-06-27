/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeaderToolbarComponent } from './header-toolbar.component';

describe('Component: HeaderToolbar', () => {
  it('should create an instance', () => {
    let component = new HeaderToolbarComponent();
    expect(component).toBeTruthy();
  });
});
