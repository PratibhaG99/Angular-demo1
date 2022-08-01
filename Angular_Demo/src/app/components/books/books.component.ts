import { Component, OnInit } from '@angular/core';
import {Book} from '../../Book';
import {BOOKS} from '../../Books_set';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from '../register/user-register.model';
import { ApiService } from 'src/app/shared/api.service';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = BOOKS;
  UserModelObj: UserModel = new UserModel();
  constructor(private http: HttpClient, private api : ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  Wishlist(id: number | undefined){
    if(sessionStorage.getItem('name')==null){
      alert("Please Login!!!");
    }
    else{
      this.http.get<any>("http://localhost:3000/users/"+sessionStorage.getItem('id'))
      .subscribe(res=>{
        var  flag= true;
        for(var i=0; i<res.wishlist.length;i++){
          if(res.wishlist[i]==id){
            flag = false;
          }
        }
        if(flag==true){
          res.wishlist.push(id);
          this.api.addWishlist(sessionStorage.getItem('id'),res)
          .subscribe(res=>{
            alert("Wishlisted book!!!");
            this.router.navigate(['admin/home']);
          },
          err=>{
            alert("Something went wrong!!!");
          })
        }
        else{
          alert("Already in wishlist !!!");
        }
      },
      err=>{
          alert("Something Went Wrong!!!");
        })
    }
  }

  Complete(id: number | undefined){
    if(sessionStorage.getItem('name')==null){
      alert("Please Login!!!")
    }
    else{
      this.http.get<any>("http://localhost:3000/users/"+sessionStorage.getItem('id'))
      .subscribe(res=>{
        var  flag= true;
        for(var i=0; i<res.completed.length;i++){
          if(res.completed[i]==id){
            flag = false;
          }
        }
        if(flag==true){
        res.completed.push(id);
        this.api.addWishlist(sessionStorage.getItem('id'),res)
        .subscribe(res=>{
          alert("Completed book marked!!!");
          this.router.navigate(['admin/home']);
        },
        err=>{
          alert("Something went wrong!!!");
        })
      }
      else{
        alert("Already in completed list !!!");
      }
      },
      err=>{
          alert("Something Went Wrong!!!");
        })
    }
    
  }
}
