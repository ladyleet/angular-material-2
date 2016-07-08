/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RadioExampleComponent } from './radio-example.component';

describe('Component: RadioExample', () => {
  it('should create an instance', () => {
    let component = new RadioExampleComponent();
    expect(component).toBeTruthy();
  });
});
