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
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contact: ''
  }
  constructor(private admin_service:AdminserviceService, private router: Router) { }

  ngOnInit(): void {
      
  }

  onSubmit(): void{
    this.admin_service.postAdmin(this.logindata).subscribe(
      data=>{
        console.log("res-->", data);
        if(data.email == undefined){
          alert("Please enter correct credentials..!")        
        }else {
          this.logindata = data     
          alert("Welcome"+ data.firstname)
          this.router.navigate(['/dashboard'])
        }
      }
    )
  }

}
