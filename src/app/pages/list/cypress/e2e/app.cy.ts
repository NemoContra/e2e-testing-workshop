import { getText } from '../support/app.po';

describe('e2e-testing-workshop', () => {
  beforeEach(() => cy.visit('/flight-list'));

  it('should the works message', () => {
    getText().contains('flights works!');
  });
});
