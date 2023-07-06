import { makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { flightSearchFeature } from './+state/flight-search.feature';
import { provideEffects } from '@ngrx/effects';
import { FlightSearchEffects } from './+state/flight-search.effects';

export const provideFlightList = () =>
  makeEnvironmentProviders([
    provideState(flightSearchFeature),
    provideEffects([FlightSearchEffects]),
  ]);
