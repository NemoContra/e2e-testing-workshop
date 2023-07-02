import { getGreeting } from '../support/app.po';

describe('flight-list', () => {
  beforeEach(() => cy.visit('/flight-list'));

  it('should display welcome message', () => {
    getGreeting().contains('flights works!');
  });
});
