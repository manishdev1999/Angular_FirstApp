import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import {userclass} from "./auth.model"


interface authResponseData{
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string
  }

interface logResponseData{
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn: string,
    localId : string,
    registered : boolean
}


@Injectable({
    providedIn : 'root'
})


export class AuthService{
    
    user  = new Subject<userclass>()
    constructor(private http: HttpClient){}

    _signupurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJgf6V9HlZSXg6BeYCib_xaZBRpnEoZTY'
    _signinurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJgf6V9HlZSXg6BeYCib_xaZBRpnEoZTY'
    sigup(payload : any){
        return this.http.post<authResponseData>(this._signupurl, payload).pipe(
            catchError
        )
     
    }
    sigin(payload : any){
        return this.http.post<logResponseData>(this._signinurl, payload)
     
    }




}