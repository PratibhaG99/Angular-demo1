import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  RegisterUser(){
    if(sessionStorage.getItem('id')!=null){
      alert("Already Loggedin");
    }
    else{
      this.router.navigate(['register']);
    }
  }

  LoginUser(){
    if(sessionStorage.getItem('id')!=null){
      alert("Already Loggedin");
    }
    else{
      this.router.navigate(['login']);
    }
  }
}
