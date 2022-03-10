import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/productModel';
import { ProductsService } from '../../service/products-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  product!: Product[];
  constructor(private productsService:ProductsService,
              private router : Router) { }

  ngOnInit() { 
    this.getProducts()
  }
 getProducts(){
  this.productsService.getProducts().subscribe(data =>{
   console.log(data,"dataaa")
    this.product = data.data
    console.log(data.data ,"products")
  })
}
seeDetails(id: number){
  this.router.navigate(['products',id]);
}

}
