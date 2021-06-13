import { Component, Input, OnInit } from '@angular/core';
import { header } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
})
export class BuyerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() buyerProcess: header;

}
