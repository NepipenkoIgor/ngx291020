import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public courseTitle = 'Angular Course';
  public drawer!: MatDrawer;
  public count: number = 0;


  // constructor(
  //   private cdr: ChangeDetectorRef
  // ) {
  // }

  public setSidenav(drawer: MatDrawer): void {
    // Promise.resolve().then(() => {
    //   this.drawer = drawer;
    // });
    this.drawer = drawer;
    // this.cdr.detectChanges();
  }
}


// ----AA----AA-----AA
