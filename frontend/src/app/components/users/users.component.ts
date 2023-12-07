import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/app/types/user';
import { USER_DATA } from 'src/app/model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent implements OnInit {
  users: IUser[];

  ngOnInit(): void {
    this.users = USER_DATA;
  }
  onMoreInfo(usr: IUser) {
    alert(`Mr. ${usr.firstName} is working with ${usr.company}! `);
  }
}
