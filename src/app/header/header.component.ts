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
    console.log('[setter]', value);
    this.title = value;
  };

  @Input()
  public drawer!: MatDrawer;
  public title!: string;

  // @Input()
  // title: any;
  //
  // constructor(
  //   private cdr: ChangeDetectorRef,
  //   private ngZone: NgZone
  // ) {
  //
  // }

  public ngOnInit(): void {
    // this.cdr.detach();
    //
    // vk.getUser((user) => {
    //   this.ngZone.run(() => {
    //     console.log(user)
    //     this.user = user;
    //   });
    //   this.ngZone.runOutsideAngular(()=>{
    //     // some calc;
    //   })
    // });

    // setTimeout(() => {
    //   this.cdr.reattach();
    // }, 14000);
  }

  // getDate(): number {
  //   return Date.now();
  // }

  toggleSideNav(): void {
    this.drawer.toggle();
  }

  // public ngDoCheck(): void {
  //   console.log('In Header');
  // }
  //
  // public ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

}
