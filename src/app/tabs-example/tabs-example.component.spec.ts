/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TabsExampleComponent } from './tabs-example.component';

describe('Component: TabsExample', () => {
  it('should create an instance', () => {
    let component = new TabsExampleComponent();
    expect(component).toBeTruthy();
  });
});
