import { Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { provideState } from '@ngrx/store';
import { flightSearchFeature } from './+state/flight-search.feature';
import { provideEffects } from '@ngrx/effects';
import { FlightSearchEffects } from './+state/flight-search.effects';

export default [
  {
    path: '',
    component: SearchComponent,
    providers: [
      provideState(flightSearchFeature),
      provideEffects([FlightSearchEffects]),
    ],
  },
] satisfies Routes;
