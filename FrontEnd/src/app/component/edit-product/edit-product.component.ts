import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: any;
  item: any;
  updateForm: FormGroup;
  updatedItem:any;
  
  constructor(private formbuilder:FormBuilder ,private productservice: ProductService) { 
    this.updateForm = formbuilder.group ({
      imageUrl:  [''],
      title: [''],
      description: [''],
      price: ['']
    })
  }

  ngOnInit(): void {
    this.productservice.getProduct().subscribe(res => {
      console.log(res);
      this.product = res;
    })
  }
  onSubmit (id:number) {
    this.productservice.getProductById(id).subscribe(res => {
      console.log(res);
      this.updatedItem = res;
      let x: any = this.updateForm.value;
      for (let key of Object.keys(x)) {
        if (x[key] != "") {
          this.updatedItem[key] = x[key]
        }
      }
      this.productservice.updateProduct(id, this.updatedItem).subscribe(res => {
         window.location.reload();
      })
    })
   
  }

  remove (id:number) {
    this.productservice.deleteProductById(id).subscribe(res => {
      window.location.reload();
    })
  }


}
