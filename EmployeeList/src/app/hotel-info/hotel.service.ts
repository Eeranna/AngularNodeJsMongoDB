import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/getHotels';

  getHotels() {
    return this.http.get<any>(this.baseUrl);
  }
}
