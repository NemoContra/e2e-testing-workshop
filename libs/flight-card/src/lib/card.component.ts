import { DatePipe, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  Output,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Flight } from '@e2e-testing-workshop/models';
import { createRandomId } from '@e2e-testing-workshop/common';
import { TestIdDirective } from '@e2e-testing-workshop/test-id';

/**
 * This is a card which renders a flight in a human-readable way
 */
@Component({
  standalone: true,
  selector: 'flight-card',
  imports: [NgIf, DatePipe, NgStyle, TestIdDirective],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  get selectedFlight() {
    return this.flight();
  }
  set selectedFlight(selectedFlight: Flight | undefined) {
    this.flight.set(selectedFlight);
  }
  flight = signal<Flight | undefined>(undefined);

  @Input()
  get selected() {
    return this.isSelected();
  }
  set selected(selected: boolean) {
    this.isSelected.set(selected);
  }
  isSelected = signal<boolean>(false);

  @Output() selectedChange = toObservable(this.isSelected);

  id = createRandomId('flight-card');

  delayed = computed(() => (this.flight()?.delayed ? 'yes' : 'no'));

  select(): void {
    this.isSelected.set(true);
  }

  deselect(): void {
    this.isSelected.set(false);
  }
}
