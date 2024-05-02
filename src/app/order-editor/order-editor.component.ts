import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IOrder } from '../../IOrder';
import { IProduct } from '../../IProduct';
import { BaseinformationService } from '../baseinformation.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrl: './order-editor.component.css'
})
export class OrderEditorComponent implements OnInit{

  token: string='';
  id: number=0;
  currentOrder!: IOrder;
  productList: IProduct[] = [];

  public eOrderForm: FormGroup;

  constructor(private _productService: BaseinformationService, 
    private _orderService: OrderService, 
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.eOrderForm = this.formBuilder.group({
        productId: [0, Validators.required],
        productName: ['', Validators.required],
        id: [0, Validators.required],
        title: ['', Validators.required],
        number: ['', Validators.required],
        shopId: [0, Validators.required],
        shopName: ['', Validators.required],
        date: [new Date(), Validators.required],
        deliveryDate: [new Date(), Validators.required],
        description: ['', Validators.required],
        price: [0, Validators.required],
        count: [0, Validators.required],
        discount: [0, Validators.required],
        owner: [0, Validators.required]
      });
    }

  ngOnInit(): void {
    this._productService.getProductData().subscribe(p=> this.productList = p);

    this.route.queryParams.subscribe(params => {
      this.token = JSON.parse(params["token"]);
      this.id = JSON.parse(params["id"]);
    });

    if(this.token.length > 0)
    {
      this._orderService.GetOrder(this.id,this.token).subscribe((o: IOrder) => this.eOrderForm.patchValue(o));
    }
  }

  // changeProduct(ev) {
  //   console.log(ev.value);
  //   this.currentOrder.productId = ev.target.value;
  // }

  updateOrdre(form: FormGroup)
  {
    this._orderService.updateOrder(form.getRawValue(), this.token).subscribe((response: any)=>{
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
