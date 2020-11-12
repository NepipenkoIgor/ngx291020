import {
  Component,
  Input
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public set myTitle(value: string) {
    if (!value) {
      return;
    }
    console.log('[setter]', value);
    this.title = value;
  };

  @Input()
  public drawer!: MatDrawer;

  public title!: string;

  toggleSideNav(): void {
    this.drawer.toggle();
  }

}
