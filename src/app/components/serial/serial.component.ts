import { Component, Input, OnInit } from '@angular/core';
import { header } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.scss'],
})
export class SerialComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() serialProcess: header; 

}
