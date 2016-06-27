/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TestComponentsComponent } from './test-components.component';

describe('Component: TestComponents', () => {
  it('should create an instance', () => {
    let component = new TestComponentsComponent();
    expect(component).toBeTruthy();
  });
});
