import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {HomeComponent} from './home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule('child-products', './Component').then((module) => module.ProductsEntryComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      loadRemoteModule('child-profile', './Component').then((module) => module.ProfileEntryComponent),
  },
];
