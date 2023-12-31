import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl =
    'https://dec23-ng-default-rtdb.firebaseio.com/userdata.json';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}`);
    // return USER_DATA;
  }
}
