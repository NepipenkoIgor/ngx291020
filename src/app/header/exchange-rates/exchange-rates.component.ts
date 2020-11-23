import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {

  public rates = [
    {value: 28, currency: 'USD'},
    {value: 31, currency: 'EUR'},
    {value: 0.35, currency: 'RUB'},
  ];

  public playMode: 'on' | 'off' = 'on';
  public ms = 3000;

  constructor() {
  }

  ngOnInit(): void {
  }

}
