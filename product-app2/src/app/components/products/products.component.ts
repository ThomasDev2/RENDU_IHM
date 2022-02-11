import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loadedProducts:ProductModel[]=[];
  subscription:Subscription=new Subscription();
  
  constructor(private productService:ProductsService) {
    this.productService.getProducts();
    this.subscription=this.productService.observableProducts
    .subscribe((fetchedProducts)=>{
      this.loadedProducts=fetchedProducts
    });
  }

  ngOnInit(): void {
    
  }

  
}
