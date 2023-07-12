import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { TableComponent } from './table/table.component';
import { LetDirective } from '@ngrx/component';
import { FlightListFacade } from './+state/flight-list.facade';

@Component({
  standalone: true,
  selector: 'flight-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NgForOf, NgIf, DatePipe, AsyncPipe, TableComponent, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  private flightSearchFacade = inject(FlightListFacade);

  flightSearchPageViewModel = this.flightSearchFacade.flightListPageViewModel;

  ngOnInit(): void {
    this.flightSearchFacade.loadFlightList();
  }
}
