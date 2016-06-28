/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InputExampleComponent } from './input-example.component';

describe('Component: InputExample', () => {
  it('should create an instance', () => {
    let component = new InputExampleComponent();
    expect(component).toBeTruthy();
  });
});
