import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shopuld return products in observable', () => {
    let products: string[] = [];
    service.getProductsObs().subscribe((data) => products.push(data));

    expect(products).not.toHaveSize(0);
  });
});
