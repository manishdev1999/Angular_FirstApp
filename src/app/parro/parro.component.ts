import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parro',
  templateUrl: './parro.component.html',
  styleUrls: ['./parro.component.css']
})
export class ParroComponent implements OnInit {

  id : any = ''
  constructor(private _Activatedroute:ActivatedRoute){}


  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id)
  }

}
