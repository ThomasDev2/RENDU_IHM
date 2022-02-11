import { Component, OnInit } from '@angular/core';
import { SmallOrderModel } from 'src/app/model/small-order-model';
import { OrdersService } from 'src/app/services/orders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  loadedOrders:SmallOrderModel[]=[];
  subscription:Subscription=new Subscription();
  constructor(private orderService:OrdersService) { 
    this.subscription=this.orderService.observableOrders
    .subscribe((fetchedOrders)=>{
      this.loadedOrders=fetchedOrders;
    });
  }

  ngOnInit(): void {
    this.orderService.getOrders();
  }
}
