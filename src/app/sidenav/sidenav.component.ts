import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  @ViewChild('container', {static: true, read: ViewContainerRef})
  public container!: ViewContainerRef;

  @ContentChild('contentTpl', {static: true})
  public contentTpl!: TemplateRef<any>;

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  ngOnInit(): void {
    this.setSidenavControl.emit(this.drawer);
  }

  public ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.contentTpl);
  }

  public ngAfterContentInit(): void {

  }

}
