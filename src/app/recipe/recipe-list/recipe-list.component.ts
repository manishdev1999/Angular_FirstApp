import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() reciepeSelected = new EventEmitter<Recipe>();
 
  constructor(private reciepeservice : RecipeService) { }
  recipes : any

  ngOnInit(): void {
    this.recipes = this.reciepeservice.getRecipe()
  }

  recipeSelect(rec:Recipe){
    this.reciepeSelected.emit(rec)
    console.log(rec)
    
  }
  recipeSelectd(){
    console.log("2")

  }
}
