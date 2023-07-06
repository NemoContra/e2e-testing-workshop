import { z } from 'zod';

export const flightSchema = z.object({
  id: z.number(),
  from: z.string(),
  to: z.string(),
  date: z.string(),
  delayed: z.boolean(),
});

export const flightsSchema = z.array(flightSchema);

export type Flight = z.TypeOf<typeof flightSchema>;
export type Flights = z.TypeOf<typeof flightsSchema>;

export const FIND_FLIGHT_FROM = 'from' as const;
export const FIND_FLIGHT_TO = 'to' as const;

export type SearchFlightsQueryParamKeys =
  | typeof FIND_FLIGHT_FROM
  | typeof FIND_FLIGHT_TO;

export type SearchFlightsQueryParams = Record<
  SearchFlightsQueryParamKeys,
  string
>;
