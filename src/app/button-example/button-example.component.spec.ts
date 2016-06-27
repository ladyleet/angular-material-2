/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ButtonExampleComponent } from './button-example.component';

describe('Component: ButtonExample', () => {
  it('should create an instance', () => {
    let component = new ButtonExampleComponent();
    expect(component).toBeTruthy();
  });
});
