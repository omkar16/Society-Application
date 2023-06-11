import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private admin_service: AdminserviceService, private router: Router
  ) { }

  ngOnInit(): void {
 //   this.getProfile()
  }

  // getProfile(){
  //   this.admin_service.getAdmin().subscribe(
  //     data=>{
  //       console.log("res-->", data);
  //       if(data){     
  //         alert("Welcome"+ data.email)
  //         this.router.navigate(['/dashboard'])
  //       }else console.log("Please enter correct credentials..!")
  //     }
  //   )

  // }

}
