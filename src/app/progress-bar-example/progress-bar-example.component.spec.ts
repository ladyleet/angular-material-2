/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProgressBarExampleComponent } from './progress-bar-example.component';

describe('Component: ProgressBarExample', () => {
  it('should create an instance', () => {
    let component = new ProgressBarExampleComponent();
    expect(component).toBeTruthy();
  });
});
