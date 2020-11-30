import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { UsernameValidatorDirective } from './username-validator.directive';


@NgModule({
  declarations: [
    LoginComponent,
    UsernameValidatorDirective
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ]
})
export class LoginModule {
}
