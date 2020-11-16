import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[course-hidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective {

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }

}
