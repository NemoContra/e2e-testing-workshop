import { Flight } from '@e2e-testing-workshop/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const flightSearchActions = createActionGroup({
  source: 'flightSearch',
  events: {
    loadFlights: emptyProps(),
    loadFlightsSuccess: props<{ flights: Flight[] }>(),
    loadFlightsError: props<{ loadFlightsErrorCode: number }>(),
  },
});
