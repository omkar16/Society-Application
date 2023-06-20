import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icustomer } from '../icustomer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admindata: Icustomer={
    email:'' ,
    password: '', 
    firstName: '',
    lastName: '',
    contact: '',
    token: ''
  }

  constructor(private admin_service: AdminserviceService, private router: Router) { 

  }

  ngOnInit(): void {
 //   this.getProfile()
 this.admin_service.getAdmin().subscribe((data:Icustomer)=>{
  this.admindata = data
  alert(this.admindata.firstName)
}
)
}

}
