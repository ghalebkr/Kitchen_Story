import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  product :any;
  search:string = "";
  cartForm : FormGroup;

  constructor(private productservice:ProductService, private cartservice:CartService, private formbuilder:FormBuilder) { 
    this.cartForm = formbuilder.group ({
      quantity : [1],
    })
  }

  ngOnInit(): void {

    this.productservice.getProduct().subscribe (res => {
      console.log(res);
      this.product=res;  
    })
    this.cartservice.deleteCart().subscribe(res=>{
      console.log(res);
      
    });
  }

  cart (productid:number) {
    let myobject = this.cartForm.value;
    myobject["productId"]=productid;
    console.log(myobject);
    
    this.cartservice.setCart(myobject).subscribe( res=>{
      console.log(res);
    });
  }
  


}
