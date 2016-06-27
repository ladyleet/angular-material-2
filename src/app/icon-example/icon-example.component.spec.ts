/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IconExampleComponent } from './icon-example.component';

describe('Component: IconExample', () => {
  it('should create an instance', () => {
    let component = new IconExampleComponent();
    expect(component).toBeTruthy();
  });
});
