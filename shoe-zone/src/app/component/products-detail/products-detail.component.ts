import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../../model/productModel';
import { ProductsService } from '../../service/products-service.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  id!: number;
  product!: Product;
  constructor(private productsService : ProductsService,
              private router : Router,
              private route : ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.getProductsById(this.id)
  }
  getProductsById(id: number) {
      this.productsService.getProducts().subscribe(data =>{
        this.product = data.data[id-1]
        console.log(data.data[id-1] ,"products")
      })
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
