import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private productservice: ProductService, private cartservice: CartService) { 
  }
  cart:any;
  product:any;
  ngOnInit(): void { 
    this.cartservice.getCart().subscribe(res=>{
      this.cart=res;
    });

    this.productservice.getProduct().subscribe(res => {
      this.product=res;
    });
  }
  
 

  }
    