import { Recipe } from "./recipe.model";

export class RecipeService{
    recipes:Recipe[] = [
        new Recipe('biriyani','biriyani','https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg'),
        new Recipe('pasta', 'pasta', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg')
      ];

    getRecipe(){
        return this.recipes.slice()
    }
} 