import { JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@e2e-testing-workshop/flight-card';
import { FlightService } from '@e2e-testing-workshop/services';
import { Flight } from '@e2e-testing-workshop/models';

@Component({
  standalone: true,
  selector: 'flight-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [FormsModule, JsonPipe, NgIf, NgFor, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  private flightService = inject(FlightService);

  from = signal<string>('');
  to = signal<string>('');

  flights = signal<Flight[]>([]);
  basket = signal<Record<string, boolean>>({});

  loading = signal<boolean>(false);

  search(): void {
    const from = this.from();
    const to = this.to();

    if (!from || !to) {
      return;
    }

    this.loading.set(true);

    this.flightService.searchFlights({ from, to }).subscribe({
      next: (flights: Flight[]) => {
        this.flights.set(flights);
        this.loading.set(false);
      },
    });
  }
}