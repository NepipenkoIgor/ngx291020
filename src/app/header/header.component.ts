import {
  Component, EventEmitter,
  Input, Output
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


  @Input()
  public size: number = 0;
  @Output()
  public sizeChange = new EventEmitter();

  public title!: string;

  public inc(): void {
    this.sizeChange.emit(this.size + 1);
  }

  // constructor() {
  //   console.log('[constructor]', this.myTitle);
  // }
  //
  // public ngOnInit(): void {
  //   console.log('[ngOnInit]', this.myTitle);
  // }
  //
  // public ngOnChanges(changes: SimpleChanges): void {
  //   console.log('[ngOnChanges]', changes);
  // }
  //
  // public ngAfterContentInit(): void {
  //   console.log('[ngAfterContentInit]!', this.myTitle);
  // }
  //
  // public ngAfterContentChecked(): void {
  //   console.log('[ngAfterContentChecked]!', this.myTitle);
  // }
  //
  // public ngAfterViewInit(): void {
  //   console.log('[ngAfterViewInit]!', this.myTitle);
  // }
  //
  // public ngAfterViewChecked(): void {
  //   console.log('[ngAfterViewChecked]!', this.myTitle);
  // }
  //
  // public ngDoCheck(): void {
  //   console.log('[ngDoCheck]!!');
  // }
  //
  // public ngOnDestroy(): void {
  // }

  toggleSideNav(): void {
    this.drawer.toggle();
  }

}
