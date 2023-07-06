import { ListComponent } from './list.component';
import { createHostFactory } from '@ngneat/spectator/jest';
import { TableComponent } from './table/table.component';
import { MockComponent } from 'ng-mocks';
import { FlightService } from '@e2e-testing-workshop/services';
import { ReplaySubject } from 'rxjs';
import { Flight } from '@e2e-testing-workshop/models';
import { mockFlights } from '@e2e-testing-workshop/test-helpers';

describe('ListComponent', () => {
  const flights$$ = new ReplaySubject<Flight[]>(1);
  const createComponent = createHostFactory({
    component: ListComponent,
    providers: [
      {
        provide: FlightService,
        useFactory: () => ({
          getFlights: jest.fn().mockReturnValue(flights$$),
        }),
      },
    ],
    overrideComponents: [
      [
        TableComponent,
        {
          remove: { imports: [TableComponent] },
          add: { imports: [MockComponent(TableComponent)] },
        },
      ],
    ],
  });

  it('render an empty table', () => {
    const spectator = createComponent('<flight-list></flight-list>');
    expect(spectator.fixture).toMatchSnapshot();
    expect(spectator.query(TableComponent)?.flights).toBeNull();
  });

  it('should resolve the data from http and render the table', () => {
    const spectator = createComponent('<flight-list></flight-list>');
    flights$$.next(mockFlights);
    spectator.detectChanges();
    expect(spectator.fixture).toMatchSnapshot();
    expect(spectator.query(TableComponent)?.flights).toEqual(mockFlights);
  });
});
