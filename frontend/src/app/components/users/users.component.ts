import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IUser } from 'src/app/types/user';
// import { USER_DATA } from 'src/app/model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // providers : []
})
export class UsersComponent implements OnInit {
  users: IUser[];

  dynamicClasses = { 'my-border': true, feature: false };

  dynamicStyles = { 'border-bottom': '3px green solid' };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.users = this.dataService.getUserData();
    this.dataService.getUserData().subscribe((data) => (this.users = data));
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
