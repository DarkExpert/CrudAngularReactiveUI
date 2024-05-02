import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths, environment } from '../environments/environment';
import { IOrder } from '../IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = environment.baseUrl + ApiPaths.Order;

  constructor(private http: HttpClient) { }

  GetOrders(token: string): Observable<IOrder[]>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<IOrder[]>(this.url, { headers });
  }

  GetOrder(id: number, token: string): Observable<IOrder>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    let gurl = this.url+'/'+id;
    return this.http.get<IOrder>(gurl, { headers });
  }

  AddNewOrders(order: IOrder, token: string): Observable<any>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.url, order, { headers });
  }

  updateOrder(order: IOrder, token: string): Observable<any>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<any>(this.url+ '/'+ order.id, order, {headers});
  }

  deleteOrder(id: number, token: string): Observable<any>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(this.url+ '/'+ id, { headers });
  }




}
