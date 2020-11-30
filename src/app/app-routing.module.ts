import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'signup',
    canActivate: [AuthGuard],
    loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path: 'backoffice',
    canActivate: [AuthGuard],
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
