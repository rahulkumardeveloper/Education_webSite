import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  signInData: any;
  joinNowStatus=true;
  authentication=false;

  servicesData() {
    console.log("services",this.signInData);
  }

  afterLogin(){
    this.joinNowStatus=false; 
    this.authentication=true;
  }


}
