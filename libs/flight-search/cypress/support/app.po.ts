import { testId } from '@e2e-testing-workshop/test-helpers';

const getHeadline = () => cy.get(testId('headline'));
const getFrom = () => cy.get(testId('from'));
const getTo = () => cy.get(testId('to'));
const getSearch = () => cy.get(testId('search'));

const findFlightCards = () =>
  cy.get(testId('flight-cards')).find(testId('card'));

const typeInFrom = (text: string) => getFrom().type(text);
const typeInTo = (text: string) => getTo().type(text);
const search = () => getSearch().click();

export const flightSearchPo = {
  getHeadline,
  getFrom,
  getTo,
  getSearch,
  findFlightCards,
  typeInFrom,
  typeInTo,
  search,
};
