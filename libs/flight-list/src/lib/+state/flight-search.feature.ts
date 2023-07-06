import { Flight } from '@e2e-testing-workshop/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { flightSearchActions } from './flight-search.actions';

export interface FlightState {
  flights: Flight[] | undefined;
  loadFlightsLoading: boolean;
  loadFlightsSuccess: boolean;
  loadFlightsErrorCode: number | undefined;
}

const initialState: FlightState = {
  flights: undefined,
  loadFlightsLoading: false,
  loadFlightsSuccess: false,
  loadFlightsErrorCode: undefined,
};

export const flightSearchFeature = createFeature({
  name: 'flightSearch',
  reducer: createReducer(
    initialState,
    on(flightSearchActions.loadFlights, (state) => ({
      ...state,
      loadFlightsLoading: true,
    })),
    on(flightSearchActions.loadFlightsSuccess, (state, { flights }) => ({
      ...state,
      flights,
      loadFlightsLoading: false,
      loadFlightsErrorCode: undefined,
      loadFlightsSuccess: true,
    })),
    on(
      flightSearchActions.loadFlightsError,
      (state, { loadFlightsErrorCode }) => ({
        ...state,
        loadFlightsErrorCode,
        loadFlightsLoading: false,
        loadFlightsSuccess: false,
      })
    )
  ),
});
