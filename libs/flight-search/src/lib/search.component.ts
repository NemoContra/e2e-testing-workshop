import { JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Input,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@e2e-testing-workshop/flight-card';
import { FlightService } from '@e2e-testing-workshop/services';
import { Flight } from '@e2e-testing-workshop/models';
import { TestIdDirective } from '@e2e-testing-workshop/test-id';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'flight-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [FormsModule, JsonPipe, NgIf, NgFor, CardComponent, TestIdDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  private flightService = inject(FlightService);

  flights = signal<Flight[]>([]);
  basket = signal<Record<string, boolean>>({});

  loading = signal<boolean>(false);

  @Input({ transform: (value: string) => +value }) id?: number;

  interval = toSignal(interval(200));

  from = signal('');
  to = signal('');

  flightRoute = computed(
    () => `Searching for a flight from ${this.from()} to ${this.to()}`
  );

  constructor() {
    effect(() => {
      console.log(this.interval(), 'Hello world');
    });
  }

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
