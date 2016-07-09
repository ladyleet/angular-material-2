/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ListExampleComponent } from './list-example.component';

describe('Component: ListExample', () => {
  it('should create an instance', () => {
    let component = new ListExampleComponent();
    expect(component).toBeTruthy();
  });
});
