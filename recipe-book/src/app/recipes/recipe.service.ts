import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../recipes/ingredient';

@Injectable()
export class RecipeService {

recipes: Recipe[]=[new Recipe('Dummy', 'Dummy', 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=16912919',[new Ingredient('French',2.5)]),new Recipe('Dummy', 'Dummy', 'http://www.clipartkid.com/images/734/football-clipart-xQcpRU-clipart.jpg',[new Ingredient('Alo',3)]),new Recipe('Dummy', 'Dummy', 'http://sr.photos1.fotosearch.com/bthumb/CSP/CSP623/k6239801.jpg',[new Ingredient('Samosa',5)])];
constructor() { }
getRecipes() {

return this.recipes;

}
}
