import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IProduct } from '../../../../../store/reducers/products.reducer';

@Component({
  selector: 'app-confirm-product',
  templateUrl: './confirm-product.component.html',
  styleUrls: ['./confirm-product.component.css']
})
export class ConfirmProductComponent {

  public product!: IProduct;
  public save = () => {
  };
  public close = () => {
  };

}

@NgModule({
  declarations: [ConfirmProductComponent],
  imports: [MatCardModule, MatButtonModule]
})
export class ConfirmProductModule {

}
