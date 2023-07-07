import { Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { provideState } from '@ngrx/store';
import { FlightSearchEffects } from './+state/flight-search.effects';
import { flightSearchFeature } from './+state/flight-search.feature';
import { provideEffects } from '@ngrx/effects';

export default [
  {
    path: '',
    component: ListComponent,
    providers: [
      provideState(flightSearchFeature),
      provideEffects([FlightSearchEffects]),
    ],
  },
] satisfies Routes;
