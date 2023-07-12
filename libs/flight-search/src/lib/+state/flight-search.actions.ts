import { Flight } from '@e2e-testing-workshop/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const flightSearchActions = createActionGroup({
  source: 'flightSearch',
  events: {
    loadFlights: props<{ from: string; to: string }>(),
    loadFlightsSuccess: props<{ flights: Flight[] }>(),
    loadFlightsError: props<{ flightsErrorCode: number }>(),
    resetFlights: emptyProps(),
  },
});
