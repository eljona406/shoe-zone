import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public totalCartProducts : number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(data=>{
      this.totalCartProducts = data.length;
    })
  }

}
