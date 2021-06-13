import { Component, Input, OnInit } from '@angular/core';
import { supplier } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() supplierProcess: supplier;

}
