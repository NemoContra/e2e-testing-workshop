import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'flight-list',
    loadChildren: () => import('@e2e-testing-workshop/flight-list'),
  },
  {
    path: 'flight-search',
    loadChildren: () => import('@e2e-testing-workshop/flight-search'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
