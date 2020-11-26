import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OnPushComponent } from './header/on-push/on-push.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRateDirective } from './header/exchange-rates/exchange-rate.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';


@NgModule({
  declarations: [
    BackofficeComponent, HeaderComponent,
    SidenavComponent, OnPushComponent,
    ExchangeRatesComponent,
    ExchangeRateDirective,
    HiddenDirective],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
        children: [
          {
            path: '',
            data: {
               breadcrumbs: {
                 url: 'products',
                 title: 'Products page'
               }
            },
            loadChildren: () => import('./сontent/products/products.module').then((m) => m.ProductsModule)
          }
        ]
      }
    ])
  ]
})
export class BackofficeModule {
}
