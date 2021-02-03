import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MastersService {
  apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  createCity(city){
    return this.httpClient.post(`${this.apiUrl}/addCity`,city);
  }
}
