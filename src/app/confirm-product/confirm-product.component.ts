import { Component, NgModule } from '@angular/core';
import { IProduct } from '../products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
