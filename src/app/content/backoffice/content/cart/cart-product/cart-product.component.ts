import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../store/reducers/сart.reducer';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {

  @Input()
  public product!: ICartProduct;

  @Output()
  public increment = new EventEmitter();
  @Output()
  public decrement = new EventEmitter();
  @Output()
  public remove = new EventEmitter();


  public incrementProduct(): void {
    this.increment.emit();
  }

  public decrementProduct(): void {
    if (this.product.count === 1) {
      this.remove.emit();
      return;
    }
    this.decrement.emit();
  }

  public removeProduct(): void {
    this.remove.emit();
  }

}
