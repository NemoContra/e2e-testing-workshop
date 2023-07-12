import { inject, Injectable } from '@angular/core';
import { FlightService } from '@e2e-testing-workshop/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { flightListActions } from './flight-list.actions';
import { catchError, concatMap, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FlightListEffects {
  private actions$ = inject(Actions);
  private flightService = inject(FlightService);

  loadFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flightListActions.loadFlights),
      concatMap(() =>
        this.flightService.getFlights().pipe(
          map((flights) => flightListActions.loadFlightsSuccess({ flights })),
          catchError(({ status }: HttpErrorResponse) =>
            of(
              flightListActions.loadFlightsError({
                loadFlightsErrorCode: status,
              })
            )
          )
        )
      )
    )
  );
}
