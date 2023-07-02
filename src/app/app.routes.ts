import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'flight-list',
    loadChildren: () => import('./pages/list/list.routing'),
  },
  {
    path: 'flight-search',
    loadChildren: () => import('./pages/search/search.routing'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
