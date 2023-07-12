import { CardComponent } from './card.component';
import { MountConfig } from 'cypress/angular';
import { getCard } from '../../cypress/support/app.po';

describe(CardComponent.name, () => {
  const config: MountConfig<CardComponent> = {};

  it('should render an empty card', () => {
    cy.mount(CardComponent, {
      ...config,
    });

    getCard().should('not.exist');
  });

  it('should render a non-selected card', () => {
    cy.mount(CardComponent, {
      ...config,
      componentProperties: {
        selected: false,
        selectedFlight: {
          id: 1,
          from: 'Graz',
          to: 'Mallorca',
          date: '2020-10-15T06:22:52.4208588+00:00',
          delayed: false,
        },
      },
    });

    getCard().should('exist');
    getCard().should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

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

    getCard().should('exist');

    getCard().should('have.css', 'background-color', 'rgb(204, 197, 185)');
  });

  it('should select a card by click', () => {
    cy.mount(CardComponent, {
      ...config,
      componentProperties: {
        selected: false,
        selectedFlight: {
          id: 1,
          from: 'Graz',
          to: 'Mallorca',
          date: '2020-10-15T06:22:52.4208588+00:00',
          delayed: false,
        },
      },
    }).then((response) => {
      getCard()
        .contains('Select')
        .click()
        .then(() => response.component.selected)
        .should('be.true');

      getCard()
        .contains('Remove')
        .click()
        .then(() => response.component.selected)
        .should('be.false');
    });
  });
});
