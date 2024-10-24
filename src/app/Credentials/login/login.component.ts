import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginform: FormGroup;

  constructor( private loginService:LoginService, private router:Router){
    this.loginform = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email] ),
      password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)] )
    })
  }



  login(){
    console.log(this.loginform);
    this.loginService.getchecked(this.loginform.value.email).subscribe(
      (res=>{
        console.log(res)
        if(res)
          {
          this.loginService.getlogin(this.loginform.value).subscribe(
            (data:any)=>{
              localStorage.setItem('email',data.email);
              this.router.navigateByUrl("/dashboard");
              alert("Login Successful")
            },
            (error)=>{
              alert("Invalid Credentials...")
            }
          )
        }
        else{
          alert("User not registered...");
          this.router.navigateByUrl("/register");
        }
      })
    )

    
    
  }
}
