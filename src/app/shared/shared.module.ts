import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL } from './services/config';
import { environment } from '../../environments/environment';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import { PermissionGuard } from './services/permission.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { ValidationService } from './services/validation.service';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [UsernameValidatorDirective],
  imports: [FormsModule],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsernameValidatorDirective,
    MatBadgeModule
  ],
  providers: [ // for each module
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> { // inject in root
    return  {
      ngModule: SharedModule,
      providers: [
        AuthGuard,
        PermissionGuard,
        ValidationService,
        {
          provide: BASE_URL,
          useValue: environment.baseUrl,
          //   multi: true
        },
      ]
    }
  }
}
