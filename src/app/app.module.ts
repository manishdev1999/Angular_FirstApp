import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { CheckingComponent } from './checking/checking.component';
import { ParroComponent } from './parro/parro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    CheckingComponent,
    ParroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path:'', component: CheckingComponent},
        {path:'shopping', component: ShoppingListComponent},
        {path:'recipe', component: RecipeComponent},
        {path:'parro/:id', component: ParroComponent},

      
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
