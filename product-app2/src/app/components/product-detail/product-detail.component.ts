import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product-model';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  loadedproducts :ProductModel[]=[];
  id:number=0;
  selectedProduct:ProductModel={"id":-1,label:"",desc:"",price:-1};
  subscription:Subscription=new Subscription();

  constructor(private route:ActivatedRoute, private router:Router,private productsService:ProductsService) {
    this.productsService.getProducts();
    this.subscription=this.productsService.observableProducts
    .subscribe((fetchedProducts)=>{
      this.loadedproducts=fetchedProducts; 
    });
    
    this.router.events.subscribe(()=>{
      this.id=parseInt(this.route.snapshot.paramMap.get('id')!)-1;
      this.selectedProduct=this.loadedproducts[this.id];
    });
     
  }
  
  ngOnInit(): void {}

}
