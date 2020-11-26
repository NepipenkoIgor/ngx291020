import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log(this.activatedRoute.snapshot.data)
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }


  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
