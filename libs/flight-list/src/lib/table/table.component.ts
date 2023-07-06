import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Flight } from '@e2e-testing-workshop/models';
import { TestIdDirective } from '@e2e-testing-workshop/test-id';

@Component({
  selector: 'flight-table',
  standalone: true,
  imports: [DatePipe, NgForOf, NgIf, TestIdDirective],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() flights?: Flight[] | null;
}
