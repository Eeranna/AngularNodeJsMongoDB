import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/getZomato';

  getZomato() {
    return this.httpClient.get<any>(this.baseUrl);
  }
}
