import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths, environment } from '../environments/environment';
import { IAuthentication } from '../IAuthentication';
import { IProduct } from '../IProduct';
import { IShop } from '../IShop';

@Injectable({
  providedIn: 'root'
})

export class BaseinformationService {

  url: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getShopData(): Observable<IShop[]>
  {
    let surl: string = this.url + ApiPaths.Shop;
    return this.http.get<IShop[]>(surl);
  }

  authenticateUser(username: string, password: string): Observable<IAuthentication>
  {
    let aurl: string = this.url + ApiPaths.User + '/authenticate';
    return this.http.post<IAuthentication>(aurl, {username, password});
  }

  getProductData(): Observable<IProduct[]>
  {
    let purl: string = this.url + ApiPaths.Product;
    return this.http.get<IProduct[]>(purl);
  }
}


