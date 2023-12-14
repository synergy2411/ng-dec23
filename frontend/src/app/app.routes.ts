import { Routes } from '@angular/router';
import { AuthComponent } from './components/demo/auth/auth.component';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/demo/todos/todos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginGuard } from './services/guards/login.guard';

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
    path: '**',
    component: PageNotFoundComponent,
  },
];
