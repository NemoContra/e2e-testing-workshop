import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '@e2e-testing-workshop/flight-card';
import { TestIdDirective } from '@e2e-testing-workshop/test-id';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { flightSearchActions } from './+state/flight-search.actions';
import { selectFlightSearchPageViewModel } from './+state/flight-search.selectors';

@Component({
  standalone: true,
  selector: 'flight-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [
    JsonPipe,
    NgIf,
    NgFor,
    CardComponent,
    TestIdDirective,
    ReactiveFormsModule,
    AsyncPipe,
    LetDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  private formBuilder = inject(FormBuilder);
  private store = inject(Store);

  flightsPageViewModel$ = this.store.select(selectFlightSearchPageViewModel);

  formGroup = this.formBuilder.group({
    from: '',
    to: '',
  });

  basket = signal<Record<number, boolean>>({});

  search(): void {
    const from = this.formGroup.value.from;
    const to = this.formGroup.value.to;

    if (from && to) {
      this.store.dispatch(flightSearchActions.loadFlights({ from, to }));
    }
  }

  selectFlight(id: number, selected: boolean): void {
    this.basket.update((basket) => ({ ...basket, [id]: selected }));
  }
}
