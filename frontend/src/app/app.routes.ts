import { Routes } from '@angular/router';
import { AuthComponent } from './components/demo/auth/auth.component';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/demo/todos/todos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginGuard } from './services/guards/login.guard';
import { ProductsComponent } from './components/demo/products/products.component';
import { OverviewComponent } from './components/demo/products/overview/overview.component';
import { SpecificationComponent } from './components/demo/products/specification/specification.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://locahost:4200
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth', //http://locahost:4200/auth
    component: AuthComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':productId/overview', // /products/overview
        component: OverviewComponent,
      },
      {
        path: 'spec',
        component: SpecificationComponent,
      },
    ],
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
