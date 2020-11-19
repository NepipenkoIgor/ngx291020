import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { OnPushComponent } from './header/on-push/on-push.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRateDirective } from './header/exchange-rates/exchange-rate.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OnPushComponent,
    ExchangeRatesComponent,
    ExchangeRateDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
      //   multi: true
    },
    {
      provide: 'baseUrl',
      useValue: 'localhost:3000',
      //  multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (baseUrl: string) => {
        return () => {
          return Promise.resolve().then(() => console.log('APP_INITIALIZER', baseUrl));
        };
      },
      deps: [BASE_URL],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// TODO mat error with IVY
