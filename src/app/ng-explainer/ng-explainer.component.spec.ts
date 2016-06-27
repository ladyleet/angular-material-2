/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NgExplainerComponent } from './ng-explainer.component';

describe('Component: NgExplainer', () => {
  it('should create an instance', () => {
    let component = new NgExplainerComponent();
    expect(component).toBeTruthy();
  });
});
