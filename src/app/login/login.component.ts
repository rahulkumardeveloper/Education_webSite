import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormData!: FormGroup;
  errorMassage = false;

  constructor(public formBuilder: FormBuilder, public services: ServicesService, public route: Router) { }
  ngOnInit(): void {

    this.loginFormData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onLogin() {
    this.errorMassage = true;
    if (this.loginFormData.invalid) {
      return
    }
    console.log(this.loginFormData.value);
    if (this.services.signInData.email == this.loginFormData.value.email && this.services.signInData.password == this.loginFormData.value.password) {
      alert("login Successfull");
      this.route.navigate(['/course']);
      this.services. afterLogin();// call the services for covert login to logout
    }
    else {
      alert("Email Id and Password wrong.");
    }
  }
  //reset the form
  reset() {
    this.loginFormData.reset();
  }
}
