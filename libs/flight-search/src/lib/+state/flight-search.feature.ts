import { Flight } from '@e2e-testing-workshop/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { flightSearchActions } from './flight-search.actions';

export interface FlightSearchState {
  flights: Flight[] | undefined;
  flightsLoading: boolean;
  flightsErrorCode: number | undefined;
}

const initialState: FlightSearchState = {
  flights: undefined,
  flightsLoading: false,
  flightsErrorCode: undefined,
};

export const flightSearchFeature = createFeature({
  name: 'flightSearch',
  reducer: createReducer(
    initialState,
    on(flightSearchActions.loadFlights, (state) => ({
      ...state,
      flightsLoading: true,
    })),
    on(flightSearchActions.loadFlightsSuccess, (state, { flights }) => ({
      ...state,
      flights,
      flightsLoading: false,
      flightsErrorCode: undefined,
    })),
    on(flightSearchActions.loadFlightsError, (state, { flightsErrorCode }) => ({
      ...state,
      flightsLoading: false,
      flightsErrorCode,
    }))
  ),
});
