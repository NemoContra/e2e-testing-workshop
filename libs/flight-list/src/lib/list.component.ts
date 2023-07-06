import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Flight } from '@e2e-testing-workshop/models';
import { TableComponent } from './table/table.component';
import { Store } from '@ngrx/store';
import { flightSearchActions } from './+state/flight-search.actions';
import { flightSearchFeature } from './+state/flight-search.feature';

@Component({
  standalone: true,
  selector: 'flight-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NgForOf, NgIf, DatePipe, AsyncPipe, TableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  private store = inject(Store);

  flights$: Observable<Flight[] | undefined> = this.store.select(
    flightSearchFeature.selectFlights
  );

  flightsLoading$: Observable<boolean> = this.store.select(
    flightSearchFeature.selectLoadFlightsLoading
  );

  ngOnInit(): void {
    this.store.dispatch(flightSearchActions.loadFlights());
  }
}
