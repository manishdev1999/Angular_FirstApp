import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IData } from "./parro";


export class DataService{

    private _url =  "assets/data.json"

    constructor(private http: HttpClient){
        this.http.post(this._url, value)
        .subscribe(responsebody => {
          console.log(responsebody)
        })
        console.log(value)
     }

    getData(){
        console.log(this._url)
        return this.http.get<IData>(this._url)
    }
}