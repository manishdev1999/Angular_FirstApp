import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { prrocType } from "./parroc";
import { map } from "rxjs/operators";
@Injectable({providedIn : 'root'})
export class parrocService{

    constructor(private http: HttpClient){}
    private _url = 'https://angular-c34ed-default-rtdb.firebaseio.com/post.json'

    createandstoredata(value : any){
        this.http.post(this._url, value)
        .subscribe(responsebody => {
          console.log(responsebody)
        })
        console.log(value)

    }

    fetchdata(){
       return this.http.get(this._url)
        .pipe(
          map((responseData : {[key : string] : prrocType}) => {
            const postsArray : prrocType[] = [];
    
            for (const key  in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray;
          })
        )   
  
    }
}