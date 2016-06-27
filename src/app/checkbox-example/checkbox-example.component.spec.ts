/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CheckboxExampleComponent } from './checkbox-example.component';

describe('Component: CheckboxExample', () => {
  it('should create an instance', () => {
    let component = new CheckboxExampleComponent();
    expect(component).toBeTruthy();
  });
});
