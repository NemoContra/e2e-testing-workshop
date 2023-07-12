import { Injectable, inject } from '@angular/core';
import { FlightService } from '@e2e-testing-workshop/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { flightSearchActions } from './flight-search.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FlightSearchEffects {
  private actions = inject(Actions);
  private flightService = inject(FlightService);

  loadFlights$ = createEffect(() =>
    this.actions.pipe(
      ofType(flightSearchActions.loadFlights),
      switchMap(({ from, to }) =>
        this.flightService.searchFlights({ from, to }).pipe(
          map((flights) => flightSearchActions.loadFlightsSuccess({ flights })),
          catchError(({ status }: HttpErrorResponse) =>
            of(
              flightSearchActions.loadFlightsError({
                flightsErrorCode: status,
              })
            )
          )
        )
      )
    )
  );
}
