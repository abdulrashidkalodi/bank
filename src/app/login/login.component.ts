import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// LOGIN FORM
  loginForm= this.fb.group({
    acno:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
login(){
  let acno= this.loginForm.value.acno
  let pswd= this.loginForm.value.acno
  console.log(acno);
  console.log(pswd);

  alert('login clicked')
  
}

}
