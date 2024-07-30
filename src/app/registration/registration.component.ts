import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {


  signInformData!: FormGroup;
  ErrorStatus = false;
  constructor(public formBuilder: FormBuilder, public route: Router,public services:ServicesService) { }

  ngOnInit(): void {

    this.signInformData = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    this.ErrorStatus = true;
    //if signUp Registration completed.
    if (this.signInformData.invalid) {
      return
    }
    else {
      console.log(this.signInformData.value);
      this.services.signInData=this.signInformData.value;
      this.services.servicesData();// call the method from services
      
      this.route.navigate(['login']);// navigate on Login after registration.

    }
  }
  //Reset the form after click rest button.
  reset() {
    this.signInformData.reset();
  }

}
