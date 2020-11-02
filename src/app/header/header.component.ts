import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public myTitle: string = '';

  @Output()
  public toggle = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleSidenav(mySpan: HTMLSpanElement): void {
    this.toggle.emit(mySpan);
  }

}
