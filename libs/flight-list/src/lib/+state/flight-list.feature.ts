import { Flight } from '@e2e-testing-workshop/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { flightListActions } from './flight-list.actions';

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

export const flightListFeature = createFeature({
  name: 'flightList',
  reducer: createReducer(
    initialState,
    on(flightListActions.loadFlights, (state) => ({
      ...state,
      loadFlightsLoading: true,
    })),
    on(flightListActions.loadFlightsSuccess, (state, { flights }) => ({
      ...state,
      flights,
      loadFlightsLoading: false,
      loadFlightsErrorCode: undefined,
      loadFlightsSuccess: true,
    })),
    on(
      flightListActions.loadFlightsError,
      (state, { loadFlightsErrorCode }) => ({
        ...state,
        loadFlightsErrorCode,
        loadFlightsLoading: false,
        loadFlightsSuccess: false,
      })
    )
  ),
});
