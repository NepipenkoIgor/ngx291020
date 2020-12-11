import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { getProductsPending } from '../../../../store/actions/products.actions';
import { IProduct } from '../../../../store/reducers/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.store.select('products', 'items');
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IRootState>,
  ) {
    console.log(this.activatedRoute.snapshot.data);
  }

  public ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }


  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
