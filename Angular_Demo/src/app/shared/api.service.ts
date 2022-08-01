import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postUser(data: any){
    return this.http.post<any>('http://localhost:3000/users', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUser(){
    return this.http.get<any>('http://localhost:3000/users/')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  addWishlist(id: string | null,data: any){
    return this.http.put<any>('http://localhost:3000/users/'+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
