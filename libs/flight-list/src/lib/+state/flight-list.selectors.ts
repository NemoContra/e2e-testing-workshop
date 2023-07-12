import { createSelector } from '@ngrx/store';
import { flightListFeature } from './flight-list.feature';

export const selectFlightListPageViewModel = createSelector({
  flights: flightListFeature.selectFlights,
  flightsLoading: flightListFeature.selectLoadFlightsLoading,
  flightsErrorCode: flightListFeature.selectLoadFlightsErrorCode,
});
