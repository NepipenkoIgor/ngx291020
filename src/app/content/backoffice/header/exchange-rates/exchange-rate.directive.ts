import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

interface IRate {
  value: number;
  currency: string;
}

@Directive({
  selector: '[appExchangeRate]'
})
export class ExchangeRateDirective implements OnInit {

  @Input('appExchangeRateFrom')
  public rates!: IRate[];

  @Input('appExchangeRateAutoplay')
  public mode: 'on' | 'off' = 'off';

  @Input('appExchangeRateDelay')
  public ms: number = 5000;

  public context: any = null;
  private index: number = 0;
  private intervalId!: number;

  public constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();
  }

  private prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval(): void {
    if (this.mode !== 'on') {
      return;
    }
    this.clearInterval()
      .initInterval();
  }

  private initInterval(): this {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms);
    return this;
  }

  private clearInterval(): this {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }
}
