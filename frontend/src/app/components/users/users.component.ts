import { Component, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent {
  user: IUser = {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 21, 1965'),
    income: 50000,
    isWorking: true,
    company: ' Microsoft',
    image: './assets/bill.jpg',
    votes: 120,
  };

  onMoreInfo(usr: IUser) {
    alert(`Mr. ${usr.firstName} is working with ${usr.company}! `);
  }
}
