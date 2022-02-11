import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderModel } from 'src/app/model/order-model';
import { SmallOrderModel } from 'src/app/model/small-order-model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  loadedOrders :SmallOrderModel[]=[];
  selectedSmallOrder:SmallOrderModel={id:-1,cart:[],buyerID:-1};
  selectedOrder:OrderModel={id:-1, cart:[], buyer:{id:-1,fName:"",lName:"",job:""}};
  subscription:Subscription =new Subscription();
  id:number=0;
  orderTotal:number=0;
  constructor(private orderService:OrdersService,private route:ActivatedRoute ,private router:Router) {
    this.orderService.getOrders();
    this.subscription=this.orderService.observableOrders
    .subscribe((fetchedOrders)=>{
      this.loadedOrders=fetchedOrders; 
    });
    
    this.router.events.subscribe(()=>{
      this.id=parseInt(this.route.snapshot.paramMap.get('id')!)-1;
      this.selectedSmallOrder=this.loadedOrders[this.id];
      console.log(JSON.stringify(this.selectedSmallOrder))
      this.selectedOrder=this.orderService.expandOrders(this.selectedSmallOrder);
      this.orderTotal=this.orderService.computeTotal(this.selectedOrder);
    });
     
  }

  ngOnInit(): void {
  }
}
