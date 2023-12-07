import { IUser } from '../types/user';

export const USER_DATA: IUser[] = [
  {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 21, 1965'),
    income: 50000,
    isWorking: true,
    company: ' Microsoft',
    image: './assets/bill.jpg',
    votes: 120,
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('Aug 2, 1965'),
    income: 0,
    isWorking: false,
    company: ' Apple',
    image: './assets/steve.jpg',
    votes: 180,
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    dob: new Date('Jan 3, 1965'),
    income: 30000,
    isWorking: true,
    company: 'World Wide Web',
    image: './assets/tim.jpg',
    votes: 140,
  },
];
