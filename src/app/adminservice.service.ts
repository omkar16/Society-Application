import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Icustomer } from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url='http://localhost:5186/api/admin'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  loginAdmin(cdata:Icustomer):Observable<Icustomer>{
    return this.httpclient.post<Icustomer>(this.url+'/validate',cdata,this.httpOptions)
  }
    getAdmin():Observable<Icustomer>{
      return this.httpclient.get<Icustomer>(this.url+'/list', this.httpOptions)
    }
  }
