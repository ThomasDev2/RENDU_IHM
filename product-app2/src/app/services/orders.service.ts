import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItemModel } from '../model/cart-item-model';
import { OrderModel } from '../model/order-model';
import { SmallOrderModel } from '../model/small-order-model';
import { UserModel } from '../model/user-model';
import { ProductModel } from '../model/product-model';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';
import { BehaviorSubject, expand, Subscription } from 'rxjs';


const ordersEndpointUrl:string="../../assets/mock_back_end/orders.json";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  usersSubscription:Subscription=new Subscription();
  loadedUsers:UserModel[]=[{id:-1, fName:"",lName:"",job:""}]
  productsSubscription:Subscription=new Subscription();
  loadedProducts:ProductModel[]=[{id:-1,label:"",desc:"",price:-1}]

  sourceOrders=new BehaviorSubject([{id:-1,cart:[{prodId:-1,quantity:-1}],buyerID:-1}]);
  observableOrders=this.sourceOrders.asObservable();
  constructor(private http:HttpClient, private usersService:UsersService,private productsService:ProductsService) {
    this.usersService.getUsers();
    this.productsService.getProducts();
    this.usersSubscription=this.usersService.observableUsers
    .subscribe((fetchedUsers)=>{
      this.loadedUsers=fetchedUsers;
    });
    this.productsSubscription=this.productsService.observableProducts
    .subscribe((fetchedProducts)=>{
      this.loadedProducts=fetchedProducts
    });
    
    console.log('users : '+JSON.stringify(this.loadedUsers))
   }

  getOrders(){
    this.http.get<SmallOrderModel[]>(ordersEndpointUrl)
    .subscribe((fetchedOrders)=>{
      this.sourceOrders.next(fetchedOrders);
    }); 
  }
  expandOrders(smallOrder:SmallOrderModel):OrderModel{
    var expandedOrder:OrderModel={id:-1,cart:[],buyer:{id:-1,fName:"",lName:"",job:""}};
    expandedOrder.id=smallOrder.id
    expandedOrder.buyer=this.loadedUsers[smallOrder.buyerID-1];
    var cartItem:CartItemModel={product:{id:-1,label:"",desc:"",price:-1},quantity:1}
    smallOrder.cart.forEach((item)=>{
      cartItem={product:this.loadedProducts[item.prodId-1],quantity:item.quantity}
      expandedOrder.cart.push(cartItem);
    })
    console.log("cart : "+JSON.stringify(expandedOrder.cart));
    return expandedOrder;
  }
  computeTotal(order:OrderModel):number{
    var total:number=0
    order.cart.forEach((item)=>{
      total+=item.product.price*item.quantity;
    })
    return total;
  }
}
