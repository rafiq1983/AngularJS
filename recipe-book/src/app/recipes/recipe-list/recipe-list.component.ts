import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {RecipeItemComponent} from './recipe-item.component';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
  })
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output()recipeSelected= new EventEmitter<Recipe>();
  constructor(private RecipeSv:RecipeService) {
 
 }
  ngOnInit( ) {
   this.recipes=this.RecipeSv.getRecipes();
  }
  onSelected(recipe: Recipe)
  {
   this.recipeSelected.emit(recipe);
  }
}
