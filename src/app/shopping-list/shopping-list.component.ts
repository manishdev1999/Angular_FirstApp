import { Component, OnInit } from '@angular/core';
import { Incredient } from './incredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  incredients: Incredient[] = [
    new Incredient("clove", "20"),
    new Incredient("ellachi", "20")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
