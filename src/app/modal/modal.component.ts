import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';
import { UnSubscriber } from '../shared/utils/unsubscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends UnSubscriber implements OnInit, OnDestroy {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modal!: ViewContainerRef;

  public isOpen: boolean = false;

  private componentFactory!: ComponentFactory<any>;
  private componentRef!: ComponentRef<any>;

  constructor(
    private readonly modalService: ModalService,
    private readonly cfr: ComponentFactoryResolver,
  ) {
    super();
  }

  ngOnInit(): void {
    this.modalService.modalSequence$
      .pipe(
        takeUntil(this.unSubscribe)
      )
      .subscribe((data: IModalData | null) => {
        console.log('ModalComponent ==>', data);
        if (!data) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.componentFactory = this.cfr.resolveComponentFactory(data.component);
        this.componentRef = this.modal.createComponent(this.componentFactory);

        Object.keys(data.context)
          .forEach((propName: string) => {
            this.componentRef.instance[propName] = data.context[propName];
          });
      });
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.isOpen = false;
  }

  public ngOnDestroy(): void {
    // do something;
    super.ngOnDestroy();
    // do something;
  }
}

