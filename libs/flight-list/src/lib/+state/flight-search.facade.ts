import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFlightSearchPageViewModel } from './flight-search.selectors';
import { flightSearchActions } from './flight-search.actions';

@Injectable({ providedIn: 'root' })
export class FlightSearchFacade {
  private store = inject(Store);

  flightSearchPageViewModel$ = this.store.select(
    selectFlightSearchPageViewModel
  );

  loadFlightSearch(): void {
    this.store.dispatch(flightSearchActions.loadFlights());
  }
}
