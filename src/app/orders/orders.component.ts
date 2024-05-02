import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IOrder } from '../../IOrder';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  token: string ='';
  Orders: IOrder[] = [];

  constructor(private route: ActivatedRoute, private _orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = JSON.parse(params["token"]);
    });

    if (this.token.length > 0)
    {
      this._orderService.GetOrders(this.token).subscribe(data=> this.Orders = data);
    }
  }

  createOrder()
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "token": JSON.stringify(this.token)
      }
    };
    this.router.navigate(['./createorder'], navigationExtras);

  }

  editOrder(id: number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "token": JSON.stringify(this.token),
          "id": JSON.stringify(id)
      }
    };
    this.router.navigate(['./editeorder'], navigationExtras);
  }

  deleteOrder(id: number)
  {
    this._orderService.deleteOrder(id, this.token).subscribe(res=>{
        console.log(res);    
        window.location.reload();
      }, 
      (error)=>{
        console.error(error);
      });
  }


}
