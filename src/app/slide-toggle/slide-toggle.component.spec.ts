/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SlideToggleComponent } from './slide-toggle.component';

describe('Component: SlideToggle', () => {
  it('should create an instance', () => {
    let component = new SlideToggleComponent();
    expect(component).toBeTruthy();
  });
});
