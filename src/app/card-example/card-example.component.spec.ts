/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardExampleComponent } from './card-example.component';

describe('Component: CardExample', () => {
  it('should create an instance', () => {
    let component = new CardExampleComponent();
    expect(component).toBeTruthy();
  });
});
