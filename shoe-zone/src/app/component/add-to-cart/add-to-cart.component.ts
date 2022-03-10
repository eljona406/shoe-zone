import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/productModel';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  product! : Product[] ;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(data=>{
      this.product = data;
    })
  }
  removeProduct(product: Product){
    this.cartService.removeCartProduct(product);
  }
  emptycart(){
    this.cartService.removeAllCartProducts();
  }
   
}
