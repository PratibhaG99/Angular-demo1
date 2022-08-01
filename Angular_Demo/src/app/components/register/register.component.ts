import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { UserModel } from './user-register.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm !: FormGroup;

  UserModelObj: UserModel = new UserModel();
  constructor(private formBuilder: FormBuilder, private api : ApiService,private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirmpassword: ['']
    })
  }

  postUserDetails(){
    if(this.regForm.value.email){
      var atpos= this.regForm.value.email.indexOf("@");
      var dotpos= this.regForm.value.email.indexOf(".");
    }
    if(!(this.regForm.value.email) || !(this.regForm.value.password) || !(this.regForm.value.name) || !(this.regForm.value.confirmpassword)){
      alert("Please enter the valid details !!!");
      this.regForm.reset();
    }
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=this.regForm.value.email.length){
      alert("Invalid Email format !!!");
      this.regForm.reset();
    }
    else if (this.regForm.value.confirmpassword != this.regForm.value.password){
      alert("Password do not match with confirm password !!!")
      this.regForm.reset();
    }
    else{
      this.UserModelObj.name = this.regForm.value.name;
      this.UserModelObj.email = this.regForm.value.email;
      this.UserModelObj.password = this.regForm.value.password;
      this.UserModelObj.wishlist= [];
      this.UserModelObj.completed= [];

      this.api.postUser(this.UserModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Registration Successful!!!");
        this.regForm.reset();
        this.router.navigate(['/login']);
      },
      err=>{
        alert("Something went wrong!!!");
      })
  }
}
}
