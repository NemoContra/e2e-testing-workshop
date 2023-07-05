import { flightSearchPo } from '../support/app.po';
import { testId } from '@e2e-testing-workshop/test-helpers';

describe('flight-search', () => {
  beforeEach(() => cy.visit('/flight-search'));

  describe('From Graz to Hamburg returns 2 flights', () => {
    beforeEach(() =>
      cy
        .intercept(
          'GET',
          'http://www.angular.at/api/flight?from=Graz&to=Hamburg',
          [
            {
              id: 2,
              from: 'Graz',
              to: 'Hamburg',
              date: '2023-07-05T12:06:27.7977683+00:00',
              delayed: false,
            },
            {
              id: 3,
              from: 'Graz',
              to: 'Hamburg',
              date: '2023-07-05T12:06:27.7977683+00:00',
              delayed: false,
            },
          ]
        )
        .as('flights')
    );

    it('should display 2 flights and click select and remove', () => {
      flightSearchPo.getHeadline().contains('Flight Search');
      flightSearchPo.typeInFrom('Graz');
      flightSearchPo.typeInTo('Hamburg');
      flightSearchPo.search();
      cy.wait('@flights');
      flightSearchPo.findFlightCards().should('have.length', 2);
      flightSearchPo.findFlightCards().first().find(testId('select')).click();

      flightSearchPo
        .findFlightCards()
        .first()
        .should('have.css', 'background-color', 'rgb(204, 197, 185)');

      flightSearchPo.findFlightCards().first().find(testId('remove')).click();

      flightSearchPo
        .findFlightCards()
        .first()
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
  });

  describe('From Lohr to Hamburg returns 0 flights', () => {
    beforeEach(() =>
      cy
        .intercept(
          'GET',
          'http://www.angular.at/api/flight?from=Lohr&to=Hamburg',
          []
        )
        .as('flights')
    );

    it('should display 0 flights', () => {
      flightSearchPo.typeInFrom('Lohr');
      flightSearchPo.typeInTo('Hamburg');
      flightSearchPo.search();
      cy.wait('@flights');
      flightSearchPo.findFlightCards().should('have.length', 0);
    });
  });
});
