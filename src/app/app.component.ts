import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icustomer } from './icustomer';
import { AdminserviceService } from './adminservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGate';


  constructor(private router: Router){ }
  
callLogin():void{
  this.router.navigate(['/login'])
}

}

