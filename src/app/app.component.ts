import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { IProduct, ProductsService } from './products.service';


class Title {
  constructor(public text: string) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public courseTitle = new Title('Angular Course');
  public drawer!: MatDrawer;
  public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public setSidenav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public filteredProducts(products: IProduct[], text: string): IProduct[] {
    if (!text) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    });
  }

  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}

