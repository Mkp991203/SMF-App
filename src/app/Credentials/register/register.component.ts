import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerform: FormGroup;

  constructor(private loginService:LoginService, private router:Router){
    this.registerform = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl()
    })
  }

  register(){
    this.loginService.getregister(this.registerform.value).subscribe(
      (reg=>{
        alert("Registered Succesfully....");
        this.router.navigateByUrl("/login");
      })
    )
  }
}
