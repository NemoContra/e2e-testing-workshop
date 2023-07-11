import { inject, Injectable } from '@angular/core';
import { FlightService } from '@e2e-testing-workshop/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { flightSearchActions } from './flight-search.actions';
import { catchError, concatMap, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FlightSearchEffects {
  private actions$ = inject(Actions);
  private flightService = inject(FlightService);

  loadFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flightSearchActions.loadFlights),
      concatMap(() =>
        this.flightService.getFlights().pipe(
          map((flights) => flightSearchActions.loadFlightsSuccess({ flights })),
          catchError(({ status }: HttpErrorResponse) =>
            of(
              flightSearchActions.loadFlightsError({
                loadFlightsErrorCode: status,
              })
            )
          )
        )
      )
    )
  );
}
