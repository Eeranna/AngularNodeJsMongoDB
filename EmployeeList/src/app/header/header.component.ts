import {Component, OnInit} from '@angular/core';
import {EmpService} from '../employee-list/emp.service';
import { trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-200px)'
      })),
      transition('in => out', animate('600ms ease-in-out')),
      transition('out => in', animate('1000ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  users = [];
  message = '';
  constructor(private empService: EmpService) { }
  menuState: string = 'out';
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  ngOnInit() {
    this.empService.getUsers()
      .subscribe(
        data => this.users = data,
        error => this.message = error
      );
  }
}
