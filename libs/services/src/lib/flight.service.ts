import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  FIND_FLIGHT_FROM,
  FIND_FLIGHT_TO,
  Flight,
  Flights,
  flightsSchema,
  SearchFlightsQueryParams,
} from '@e2e-testing-workshop/models';

const url = 'http://www.angular.at/api/flight';

@Injectable({ providedIn: 'root' })
export class FlightService {
  private httpClient = inject(HttpClient);

  getFlights(): Observable<Flights> {
    return this.httpClient
      .get<Flight[]>(url)
      .pipe(map((flights: Flight[]) => flightsSchema.parse(flights)));
  }

  searchFlights({
    from,
    to,
  }: Partial<SearchFlightsQueryParams>): Observable<Flights> {
    return this.httpClient
      .get<Flight[]>(url, {
        params: new HttpParams({
          fromObject: {
            ...(from && { [FIND_FLIGHT_FROM]: from }),
            ...(to && { [FIND_FLIGHT_TO]: to }),
          },
        }),
      })
      .pipe(map((flights: Flight[]) => flightsSchema.parse(flights)));
  }
}
