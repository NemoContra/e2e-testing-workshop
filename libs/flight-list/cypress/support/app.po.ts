import { testId } from '@e2e-testing-workshop/test-helpers';

export const getTable = () => cy.get(testId('table'));
export const getTableHead = (index: number) =>
  getTable().get('thead').find('tr th').eq(index);
export const getTableBody = () => getTable().get('tbody');
export const getTableCell = (row: number, column: number) =>
  getTableBody().find('tr').eq(row).find('td').eq(column);
