export const testIdAttrName = 'data-testid' as const;

export const testIds = [
  'headline',
  'from',
  'to',
  'search',
  'card',
  'flight-cards',
  'select',
  'remove',
] as const;

export type TestId = (typeof testIds)[number];

export const testId = (testId: TestId) =>
  `[${testIdAttrName}="${testId}"]` as const;
