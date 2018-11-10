import { Component, OnInit } from '@angular/core';
import {ZomatoService} from './zomato.service';

@Component({
  selector: 'app-zomato',
  templateUrl: './zomato.component.html',
  styleUrls: ['./zomato.component.css']
})
export class ZomatoComponent implements OnInit {
  zomatoList = [];
  message = '';
  p : number = 1;
  constructor(private zomatoService: ZomatoService) { }

  ngOnInit() {
    this.displayZomatoList();
  }
  displayZomatoList() {
    this.zomatoService.getZomato()
      .subscribe(
        data => this.zomatoList = data,
        error => this.message = error
      );
  }
  key : string = 'firstName';
  reverse : boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = this.reverse;
  }

}
