import { Component } from '@angular/core';
import {HeaderComponent} from './header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {} from './shopping-list/shopping-list.component';
import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService, ShoppingListService]
 })
export class AppComponent {
 
}
