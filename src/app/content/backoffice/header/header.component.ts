import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store';
import { totalProducts } from '../../../store/selectors/cart.selector';

// import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input()
  public set myTitle(value: string) {
    if (!value) {
      return;
    }
    this.title = value;
  };

  @Input()
  public drawer!: MatDrawer;
  public title!: string;


  public cartProductsCount$ = this.store.select(totalProducts);

  constructor(
    private store: Store<IRootState>
  ) {
  }

  public ngOnInit(): void {

  }

  toggleSideNav(): void {
    this.drawer.toggle();
  }

}
