import { Component, OnInit } from '@angular/core';
import { ApiRestService, requestData } from '../services/api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public apiRest: ApiRestService) {
    
  }

  public dataProcess: requestData;
  public showAddressBox: boolean = false;

  ngOnInit() {
    this.getAnswer();
  }

  public async getAnswer() {
    this.dataProcess = await this.apiRest.readData();
    console.log(this.dataProcess);
  }

  public showAddress(evento){
    if(evento.clickNow){
      this.showAddressBox = true;
    }
    else {
      this.showAddressBox = false;
    }
  }

}
