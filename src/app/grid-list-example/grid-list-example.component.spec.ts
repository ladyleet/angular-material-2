/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GridListExampleComponent } from './grid-list-example.component';

describe('Component: GridListExample', () => {
  it('should create an instance', () => {
    let component = new GridListExampleComponent();
    expect(component).toBeTruthy();
  });
});
