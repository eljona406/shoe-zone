import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/productModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    public cartProductList : any =[]
    public productList = new BehaviorSubject<any>([]);

    getProducts(){
      return this.productList.asObservable();
    }

    addToCart(product: Product) {
      this.cartProductList.push(product);
      this.productList.next(this.cartProductList);
      console.log(this.cartProductList)
    }

    removeCartProduct(product: any){
      this.cartProductList.map((a:any, index:any)=>{
        if(product.id=== a.id){
          this.cartProductList.splice(index,1);
        }
      })
      this.productList.next(this.cartProductList);
    }
    removeAllCartProducts(){
      this.cartProductList = []
      this.productList.next(this.cartProductList);
    }
}
