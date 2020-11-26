import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { ModalService } from '../../../../../modal/modal.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [
    {
      provide: ProductsService,
      useClass: ProductsService
    }
  ]
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    private readonly modalService: ModalService
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
          // add to cart
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }

}
