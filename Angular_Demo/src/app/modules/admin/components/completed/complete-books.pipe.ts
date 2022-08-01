import { Pipe, PipeTransform } from '@angular/core';
import {completed} from './complete'
import {BOOKS} from '../../../../Books_set'
import { HttpClient} from '@angular/common/http';

@Pipe({
  name: 'completeBooks'
})
export class CompleteBooksPipe implements PipeTransform {

  constructor(private http: HttpClient){}

  transform(completed: completed[]): completed[] {
    if(completed.length!=0){
      var l=completed.length;
      for(var i=0;i<l;i++){
        completed.pop();
      }
    }
    this.http.get<any>('http://localhost:3000/users/'+sessionStorage.getItem('id'))
    .subscribe(res=>{
    for(var j=0;j<5;j++){
        for(var i=0;i<res.completed.length;i++){
            if(res.completed[i]==BOOKS[j].id){
                completed.push(BOOKS[j]);
            }
        }
    }
      return completed;
    },
    err=>{
        alert("Something went wrong!!!");
      })
      return completed;
  }

}
