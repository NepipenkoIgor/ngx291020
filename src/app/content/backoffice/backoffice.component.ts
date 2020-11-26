import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  public courseTitle = 'Angular Course';
  public drawer!: MatDrawer;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  public ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public setSidenav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

}
