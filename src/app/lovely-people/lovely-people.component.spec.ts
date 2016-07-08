/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LovelyPeopleComponent } from './lovely-people.component';

describe('Component: LovelyPeople', () => {
  it('should create an instance', () => {
    let component = new LovelyPeopleComponent();
    expect(component).toBeTruthy();
  });
});
