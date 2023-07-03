import { getTable } from '../support/app.po';

describe('flight-list', () => {
  beforeEach(() => {
    cy.intercept('http://www.angular.at/api/flight', [
      {
        id: 1,
        from: 'Graz',
        to: 'Mallorca',
        date: '2020-10-15T06:22:52.4208588+00:00',
        delayed: false,
      },
    ]).as('flights');
    cy.visit('/flight-list');
  });

  it('should display welcome message', () => {
    cy.wait('@flights').its('request.body').should('be.empty');
    getTable().contains('Graz');
    getTable().contains('Mallorca');
    getTable().contains('Oct 15, 2020');
    getTable().contains('no');
  });
});
