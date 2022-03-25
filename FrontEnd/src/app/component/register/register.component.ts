import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private userservice: UserService) {
    this.register = formbuilder.group({
      firstname : ['', Validators.required],
      lastname: ['', Validators.required,],
      email: ['',Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      terms: ['', Validators.required]
    })
  }

  register : FormGroup;
  user :any;
   

  ngOnInit(): void {
    this.userservice.getUser().subscribe(res=>{
      this.user = res;
     
    }) 
  }

  data () {
    this.userservice.setUser(this.register.value).subscribe(res => {
    }) 
    console.log(this.register.value);
    console.log(this.user);
  }

  hasError(field: any) {
    return (field.invalid && field.touched && field.errors);
  }


}
