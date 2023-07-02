import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'flight-list',
    loadChildren: () => import('./flights/list.routing'),
  },
  {
    path: 'flight-search',
    loadChildren: () => import('./search/search.routing'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
