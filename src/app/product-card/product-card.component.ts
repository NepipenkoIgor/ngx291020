import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';

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

  constructor() {
  }

  ngOnInit(): void {

  }

}
