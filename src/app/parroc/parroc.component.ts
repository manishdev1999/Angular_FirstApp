import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { prrocType } from './parroc';
import { parrocService } from './parroc.service';
@Component({
  selector: 'app-parroc',
  templateUrl: './parroc.component.html',
  styleUrls: ['./parroc.component.css']
})
export class ParrocComponent implements OnInit {

  _fetcheddata : prrocType[] = []
  constructor(private http : HttpClient, private proservice : parrocService) {
    console.log("Hello1")

   }

  dataavailable : any = []
  ngOnInit(): void {
    this.proservice.fetchdata()
    .subscribe(posts => {
      this._fetcheddata = posts
    })
 
  }

  private _url = 'https://angular-c34ed-default-rtdb.firebaseio.com/post.json'
  submitData(formData : NgForm){
    const value = formData.value
    this.proservice.createandstoredata(value)
  }

  getData(){
    this.proservice.fetchdata()
    .subscribe(posts => {
      this._fetcheddata = posts
    })
  }
}
