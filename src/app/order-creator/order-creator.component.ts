import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IOrder } from '../../IOrder';
import { IProduct } from '../../IProduct';
import { IShop } from '../../IShop';
import { Order } from '../../Order';
import { BaseinformationService } from '../baseinformation.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-creator',
  templateUrl: './order-creator.component.html',
  styleUrl: './order-creator.component.css'
})
export class OrderCreatorComponent implements OnInit {

  token: string='';
  productList: IProduct[] = [];
  shopList: IShop[] = [];
  newOrder!: IOrder;
  aOrderForm: FormGroup;

  
  constructor(private _orderService: OrderService, 
    private _baseService: BaseinformationService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {

      this.aOrderForm = this.fb.group(new Order());
    }

  ngOnInit(): void {

    this._baseService.getProductData().subscribe(p=> this.productList = p);

    this._baseService.getShopData().subscribe(s=> this.shopList = s);

    this.route.queryParams.subscribe(params => {
      this.token = JSON.parse(params["token"]);
    });
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  addOrder(form: FormGroup)
  {
    this.newOrder = form.value;

    this._orderService.AddNewOrders(this.newOrder, this.token).subscribe((response: any)=>{
      console.log(response);

      let navigationExtras: NavigationExtras = {
        queryParams: {
            "token": JSON.stringify(this.token)
        }
      };
  
      this.router.navigate(['./home'], navigationExtras);
    }, 
    (error)=>{
      console.error(error);
    });
  }
}
