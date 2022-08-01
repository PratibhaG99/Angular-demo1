import { Pipe, PipeTransform } from '@angular/core';
import {wish} from './wish'
import {BOOKS} from '../../../../Books_set'
import { HttpClient} from '@angular/common/http';

@Pipe({
  name: 'wishlistedBooks'
})

export class WishlistedBooksPipe implements PipeTransform {

  constructor(private http: HttpClient){}

  transform(wish: wish[]): wish[] {

    if(wish.length!=0){
      var l=wish.length;
      for(var i=0;i<l;i++){
        wish.pop();
      }
    }
    this.http.get<any>('http://localhost:3000/users/'+sessionStorage.getItem('id'))
    .subscribe(res=>{
    for(var j=0;j<5;j++){
        for(var i=0;i<res.wishlist.length;i++){
            if(res.wishlist[i]==BOOKS[j].id){
                wish.push(BOOKS[j]);
            }
        }
      }
      return wish;
    },
    err=>{
        alert("Something went wrong!!!");
      })
      return wish;
  }
}
