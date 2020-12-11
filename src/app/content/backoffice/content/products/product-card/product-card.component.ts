import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../../../../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    private readonly modalService: ModalService,
    private readonly store: Store<IRootState>,
  ) {
  }

  ngOnInit(): void {

  }

  public async addToCart(): Promise<void> {
    const m = await import('../confirm-product/confirm-product.component');
    this.modalService.open({
      component: m.ConfirmProductComponent,
      context: {
        product: {...this.product},
        save: () => {
          this.store.dispatch(addProductToCart({product: this.product}));
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }

}
