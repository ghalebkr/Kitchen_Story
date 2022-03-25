import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private userservice: UserService, private router: Router) {
    this.loginForm = formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]],
      rememberme: ['', Validators.required]
    })
  }
  user: any;

  ngOnInit(): void {
    this.userservice.getUser().subscribe(res => {
      this.user = res;
      console.log(res);

    })
  }

  

  public onSubmit(loginForm: any) {
    if (this.loginForm.valid) {
      for (let user of this.user) {
        if (this.loginForm.value.email == user.email && this.loginForm.value.password == user.password) {
          if (user.admin == false) {
            this.router.navigateByUrl("/user")
          } else {
            this.router.navigateByUrl("/admin")
          }
        }
      }
    } else {
      console.log("Invalid Account, Please try again!");
    }
  }
  

  hasError (fieldName:any) {
    let field = this.loginForm.get(fieldName)
    return (field?.invalid && field?.touched && field?.errors)

  }

  get form() {
    return this.loginForm.controls
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  get rememberme() {
    return this.loginForm.controls['rememberme'];
  }
 

}






