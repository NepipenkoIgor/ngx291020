import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
  component: Type<any>;
  context: any;
}

@Injectable()
export class ModalService {

  private modalSequence: Subject<IModalData | null> = new Subject();

  constructor() {
  }

  public open(componentObj: IModalData): void {
    this.modalSequence.next(componentObj);
  }

  public get modalSequence$(): Observable<any> {
    return this.modalSequence.asObservable();
  }

  public close(): void {
    this.modalSequence.next(null);
  }
}
