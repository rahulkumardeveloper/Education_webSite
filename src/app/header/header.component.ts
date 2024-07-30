import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public services: ServicesService, public route: Router) { }
  authenticate: any;
  ngOnInit(): void {
  }
  // authentication data come from services for convert login to logout.
  ngDoCheck() {
    this.authenticate = this.services.authentication;
  }
  hlogin() {
    this.route.navigate(['/login']);
    console.log(this.authenticate);

    if (this.authenticate == true) {
      this.services.authentication = false;
      this.services.joinNowStatus = true;
      this.route.navigate(['/home']);
    }


  }

}
