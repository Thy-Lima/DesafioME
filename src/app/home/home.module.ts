import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AddressComponent } from 'src/app/components/address/address.component';
import { BuyerComponent } from '../components/buyer/buyer.component';
import { CurrencyComponent } from '../components/currency/currency.component';
import { SectionComponent } from '../components/section/section.component';
import { SerialComponent } from '../components/serial/serial.component';
import { SupplierComponent } from '../components/supplier/supplier.component';

import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AddressComponent, BuyerComponent, CurrencyComponent, SectionComponent, SerialComponent, SupplierComponent]
})
export class HomePageModule {}
