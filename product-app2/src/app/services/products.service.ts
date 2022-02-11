import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { BehaviorSubject } from 'rxjs';
const productsEndpointUrl:string="assets/mock_back_end/products.json";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private sourceProducts = new BehaviorSubject([{id:-1,label:"",desc:"",price:-1}]);
  observableProducts=this.sourceProducts.asObservable();

  constructor(private http:HttpClient) {}

  getProducts(){
    this.http.get<ProductModel[]>(productsEndpointUrl)
    .subscribe((fetchedProducts)=>{
      this.sourceProducts.next(fetchedProducts);
    });
  }
}
