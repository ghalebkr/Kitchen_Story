import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct :FormGroup;

  constructor(private formbuilder: FormBuilder, private productservice:ProductService) {
    this.addProduct = formbuilder.group ({
      imageUrl: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  onSubmit (form:any) {
    this.productservice.setProduct(this.addProduct.value).subscribe( res =>{
      console.log(res);
      
    });

  }
}
