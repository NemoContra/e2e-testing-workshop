import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FIND_FLIGHT_FROM,
  FIND_FLIGHT_TO,
  Flight,
  SearchFlightsQueryParams,
} from '@e2e-testing-workshop/models';

const url = 'http://www.angular.at/api/flight';

@Injectable({ providedIn: 'root' })
export class FlightService {
  private httpClient = inject(HttpClient);

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(url);
  }

  searchFlights({
    from,
    to,
  }: Partial<SearchFlightsQueryParams>): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(url, {
      params: new HttpParams({
        fromObject: {
          ...(from && { [FIND_FLIGHT_FROM]: from }),
          ...(to && { [FIND_FLIGHT_TO]: to }),
        },
      }),
    });
  }
}
