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
 ngOnInit() {
   this.fetchList();
 }

 fetchList(){
   this.httpClient.get<ProductListResponse>('https://dummyjson.com/products').subscribe((response) => {
     console.log(response);
     this.list.products = response.products;
   });
 }

}
export interface ProductListResponse {
  products: any[];
  total: number;
  skip: number;
  limit: number;
}
