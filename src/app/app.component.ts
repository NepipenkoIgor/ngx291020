import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';


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
  public products$!: Observable<IProduct[]>;
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    private cdr: ChangeDetectorRef,
    // private appRef: ApplicationRef,
  ) {

  }

  public ngOnInit(): void {
    this.products$ = products$;
    this.cdr.detectChanges();


    setTimeout(() => {
      console.log('check');
      this.courseTitle = new Title('RXJS');
      // this.appRef.tick();
    }, 7000);
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
    console.log('in function');
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

