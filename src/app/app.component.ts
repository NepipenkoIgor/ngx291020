import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public readonly courseTitle = 'Angular Course';
  public drawer!: MatDrawer;
  public products$!: Observable<IProduct[]>;
  public searchText: string = '';

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.products$ = products$;
    this.cdr.detectChanges();
    // this.products$
    //   .subscribe((products) => {
    //     console.log(products);
    //     this.products = products;
    //   });
  }

  public setSidenav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public filteredProducts(products: IProduct[], text: string): IProduct[] {
    console.log('in function')
    if (!text) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    });
  }
}

