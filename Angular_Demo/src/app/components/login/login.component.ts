import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private http: HttpClient, private router: Router,private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onSubmitLog(): void {
    if(!(this.loginForm.value.email) || !(this.loginForm.value.password) ){
      alert("Please enter the valid details!!!");
    }else{
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
      });
      if(user){
        console.log(user.name);
        sessionStorage.setItem('id', user.id);
        sessionStorage.setItem('name', user.name);
        alert("Login Success!!!");
        this.loginForm.reset();
        this.router.navigate(['admin/home']);
      }
      else{
        alert("User Not Found!!!");
      }
    },err=>{
      alert("Something Went Wrong!!!");
    })
  }
  }
}

