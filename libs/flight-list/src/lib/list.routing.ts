import { Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { provideState } from '@ngrx/store';
import { FlightListEffects } from './+state/flight-list.effects';
import { flightListFeature } from './+state/flight-list.feature';
import { provideEffects } from '@ngrx/effects';

export default [
  {
    path: '',
    component: ListComponent,
    providers: [
      provideState(flightListFeature),
      provideEffects([FlightListEffects]),
    ],
  },
] satisfies Routes;
