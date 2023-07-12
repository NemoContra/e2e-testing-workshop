import { Flight } from '@e2e-testing-workshop/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const flightListActions = createActionGroup({
  source: 'flightList',
  events: {
    loadFlights: emptyProps(),
    loadFlightsSuccess: props<{ flights: Flight[] }>(),
    loadFlightsError: props<{ loadFlightsErrorCode: number }>(),
  },
});
