import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }

  _isloggeduser = true
  _isloading = false

  changeAuth(){
    this._isloggeduser = !this._isloggeduser
    console.log("kkk")
  }


  onSubmit(formvalue : NgForm){
    this._isloading = true
    const value = formvalue.value
    const payload = {
      email : value.emailid,
      password : value.password,
      returnSecureToken : true
    }
    if(this._isloggeduser){
      console.log("manishdev")
      this.authservice.sigin(payload).subscribe(requestbody => {
        console.log(requestbody)
        this._isloading = false
      },
      error => {
        console.log(error.code)
      }
      )
    }
    else{
      console.log("manishdev")
      this.authservice.sigup(payload).subscribe(requestbody => {
        console.log(requestbody)
        this._isloading = false
      })
    }


  }
}
