import { createSelector } from '@ngrx/store';
import { flightSearchFeature } from './flight-search.feature';

export const selectFlightSearchPageViewModel = createSelector({
  flights: flightSearchFeature.selectFlights,
  flightsLoading: flightSearchFeature.selectFlightsLoading,
  flightsErrorCode: flightSearchFeature.selectFlightsErrorCode
});
