/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ToolbarExampleComponent } from './toolbar-example.component';

describe('Component: ToolbarExample', () => {
  it('should create an instance', () => {
    let component = new ToolbarExampleComponent();
    expect(component).toBeTruthy();
  });
});
