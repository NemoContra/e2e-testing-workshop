import { CardComponent } from './card.component';
import { MountConfig } from 'cypress/angular';
import { DatePipe, NgIf, NgStyle } from '@angular/common';

describe(CardComponent.name, () => {
  const config: MountConfig<CardComponent> = {
    declarations: [],
    imports: [NgIf, DatePipe, NgStyle],
    providers: [],
  };

  it('should render a selected card', () => {
    cy.mount(CardComponent, {
      ...config,
      componentProperties: {
        selected: true,
        selectedFlight: {
          id: 1,
          from: 'Graz',
          to: 'Mallorca',
          date: '2020-10-15T06:22:52.4208588+00:00',
          delayed: false,
        },
      },
    });

    cy.get('.card').should(
      'have.css',
      'background-color',
      'rgb(204, 197, 185)'
    );
  });
});
