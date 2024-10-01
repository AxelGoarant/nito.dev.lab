import {
  ApplicationConfig, InjectionToken,
  provideZoneChangeDetection, signal, WritableSignal,
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {Technology} from "./main/model/technology.model";

export const SELECTED_TECHNOLOGIES_TOKEN = new InjectionToken<WritableSignal<Technology[]>>('SELECTED_TECHNOLOGIES_TOKEN');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {provide: SELECTED_TECHNOLOGIES_TOKEN, useValue: signal([])}
  ],
};
