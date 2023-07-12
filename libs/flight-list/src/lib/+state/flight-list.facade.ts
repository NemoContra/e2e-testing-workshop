import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFlightListPageViewModel } from './flight-list.selectors';
import { flightListActions } from './flight-list.actions';

@Injectable({ providedIn: 'root' })
export class FlightListFacade {
  private store = inject(Store);

  flightListPageViewModel = this.store.selectSignal(
    selectFlightListPageViewModel
  );

  loadFlightList(): void {
    this.store.dispatch(flightListActions.loadFlights());
  }
}
