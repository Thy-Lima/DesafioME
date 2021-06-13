import { Component, Input, OnInit } from '@angular/core';
import { address } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  constructor() { }

  @Input() addressProcess: address;
  
  ngOnInit() {}

}
