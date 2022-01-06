import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
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



  AddItem(form : NgForm){

    const formvalues = form.value
    const valueadded = new Incredient(formvalues.name, formvalues.quantity)
    this.incredients.push(valueadded)
  }

}
