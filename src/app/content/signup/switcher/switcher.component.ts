import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public value: boolean = false;

  // tslint:disable-next-line:ban-types
  private onChangeCb!: Function;

  @HostListener('click')
  public toggle(): void {
    this.value = !this.value;
    this.onChangeCb(this.value);
  }

  public writeValue(checked: boolean): void {
    this.value = checked;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  // tslint:disable-next-line:variable-name
  public registerOnTouched(_fn: any): void {
  }
}
