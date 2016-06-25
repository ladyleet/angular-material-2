import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularMaterial2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularMaterial2AppComponent, [
  HTTP_PROVIDERS
]);
