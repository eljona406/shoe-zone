import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL='https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com';

  constructor( private http : HttpClient) {}

     public getProducts(): Observable<Response> {
       return this.http.get<Response>(this.URL + '/products.json');
     }

}
