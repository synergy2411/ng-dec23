import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.products = this.dataService.getProducts();
    this.dataService
      .getProductsObs()
      .subscribe((data) => this.products.push(data));
  }
}
