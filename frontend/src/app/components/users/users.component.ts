import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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

  dynamicClasses = { 'my-border': true, feature: false };

  dynamicStyles = { 'border-bottom': '3px green solid' };

  ngOnInit(): void {
    this.users = USER_DATA;
  }

  onToggleClass(element: HTMLParagraphElement) {
    this.dynamicStyles['border-bottom'] = '3px tomato dashed';

    this.dynamicClasses['feature'] = !this.dynamicClasses['feature'];
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
  }
  onMoreInfo(usr: IUser) {
    alert(`Mr. ${usr.firstName} is working with ${usr.company}! `);
  }
}
