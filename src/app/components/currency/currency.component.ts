import { Component, Input, OnInit } from '@angular/core';
import { header } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() currencyProcess: header;

}
