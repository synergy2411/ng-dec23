import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 21, 1965'),
    income: 50000,
    isWorking: true,
    company: ' Microsoft',
    image: './assets/bill.jpg',
    votes: 120,
  };

  onMoreInfo(firstName: string, company: string) {
    alert(`Mr. ${firstName} is working with ${company}! `);
  }
}
