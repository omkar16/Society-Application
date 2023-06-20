import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Icustomer } from '../icustomer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata: Icustomer={
    email:'' ,
    password: '', 
    firstName: '',
    lastName: '',
    contact: '',
    token: ''
  }
  constructor(private admin_service:AdminserviceService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.admin_service.loginAdmin(this.logindata).subscribe(
      (data:Icustomer)=>{
        this.logindata = data
        console.log("Welcome "+this.logindata)
        alert(this.logindata.firstName);
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
