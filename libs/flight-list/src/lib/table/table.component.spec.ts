import { TableComponent } from './table.component';
import { createComponentFactory } from '@ngneat/spectator';
import { mockFlights } from '@e2e-testing-workshop/test-helpers';

describe('TableComponent', () => {
  const createComponent = createComponentFactory(TableComponent);

  it('should render a table with flights', () => {
    const spectator = createComponent({
      props: {
        flights: mockFlights,
      },
    });

    expect(spectator.fixture).toMatchSnapshot();
  });
});
