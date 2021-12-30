import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   recipes:Recipe[] = [
    new Recipe('biriyani','biriyani','https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg'),
    new Recipe('pasta', 'pasta', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
