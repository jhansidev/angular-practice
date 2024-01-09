import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent implements OnInit{
  httpClient = inject(HttpClient);
  list: ProductListResponse = { products: [], total: 0, skip: 0, limit: 0 };
  smartphones : Array<Product> = [];
  ngOnInit() {
    this.fetchList();
  }

  fetchList(){
    return this.httpClient.get<ProductListResponse>('https://dummyjson.com/products').subscribe((response) => {
      console.log(response);
      this.list.products = response.products;

      this.smartphones = this.list.products.filter((product) => product.category === 'smartphones');
      console.log('smartphones',this.smartphones);
    });
  }

}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
export interface ProductListResponse {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
}
