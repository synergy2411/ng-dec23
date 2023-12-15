import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getProducts() {
    return ['Apple', 'Banana', 'Kiwi'];
  }

  getProductsObs() {
    return from(['Apple', 'Banana', 'Kiwi']);
  }
}
