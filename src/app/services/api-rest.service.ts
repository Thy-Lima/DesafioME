import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface document {
  type: string
  value: string
}

export interface contact {
  name: string
  email: string
  phone: string
  fax: string
}

export interface supplier {
  code: string
  name: string
  readAt: string
  lastReplyAt: string
  document: document
  address: string
  contact: contact
}

export interface header {
  number: number
  serial: number
  buyer: string
  price: number
  currency: string
  createdAt: string
  status: string
  contact: contact
}

export interface address {
  label: string
  name: string
  code: string
  address: string
  contact: contact
}

export interface requestData {
  header: header
  supplier: supplier
  addresses: address[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor( private http: HttpClient ) { }

  public async readData(){
    return await this.http.get<requestData>('https://me-frontend-challenge-api.herokuapp.com/orders/1').toPromise()
  }

}
