import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

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

  public ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.drawer.toggle();
  }

}
