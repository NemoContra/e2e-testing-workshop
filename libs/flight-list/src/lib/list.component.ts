import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { FlightService } from '@e2e-testing-workshop/services';
import { Observable } from 'rxjs';
import { Flight } from '@e2e-testing-workshop/models';

@Component({
  standalone: true,
  selector: 'flight-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [NgForOf, NgIf, DatePipe, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  flights$: Observable<Flight[]> = inject(FlightService).getFlights();
}
