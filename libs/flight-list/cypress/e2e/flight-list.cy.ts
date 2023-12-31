import { getTableCell, getTableHead } from '../support/app.po';
import { mockFlights } from '@e2e-testing-workshop/test-helpers';

describe('flight-list', () => {
  beforeEach(() => {
    cy.intercept('http://www.angular.at/api/flight', mockFlights).as('flights');
    cy.visit('/flight-list');
  });

  it('should display the correct', () => {
    cy.wait('@flights').its('request.body').should('be.empty');

    getTableHead(0).contains('id');
    getTableHead(1).contains('from');
    getTableHead(2).contains('to');
    getTableHead(3).contains('date');
    getTableHead(4).contains('delayed');

    getTableCell(0, 0).contains('1');
    getTableCell(0, 1).contains('Graz');
    getTableCell(0, 2).contains('Mallorca');
    getTableCell(0, 3).contains('Oct 15, 2020');
    getTableCell(0, 4).contains('no');

    getTableCell(1, 0).contains('2');
    getTableCell(1, 1).contains('Hamburg');
    getTableCell(1, 2).contains('Mallorca');
    getTableCell(1, 3).contains('Oct 15, 2020');
    getTableCell(1, 4).contains('no');

    getTableCell(2, 0).contains('3');
    getTableCell(2, 1).contains('Lohr');
    getTableCell(2, 2).contains('Miami');
    getTableCell(2, 3).contains('Oct 15, 2020');
    getTableCell(2, 4).contains('no');
  });
});
