import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, observable } from 'rxjs';

import { Icustomer } from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
   url = "http://localhost:5186/api/admin"
  //url = "http://192.168.1.38:3000/api/users/profile"
  httpOptions = {headers: new HttpHeaders({'content-type':'application/json'})}
  constructor(private httpclient: HttpClient) {} 

    postAdmin(admindata:Icustomer):Observable<Icustomer>{
      return this.httpclient.post<Icustomer>(this.url+'/validate', admindata,this.httpOptions)
    }
    getAdmin():Observable<any>{
      return this.httpclient.get<Icustomer>(this.url, this.httpOptions)
    }
  }
