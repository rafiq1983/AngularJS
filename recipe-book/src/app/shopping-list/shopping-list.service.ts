import { Injectable } from '@angular/core';
import {Ingredient} from '../recipes/ingredient';

@Injectable()
export class ShoppingListService {
 private items:Ingredient[]=[];
constructor() { }
getItems()
{
  return this.items;
}

addItems(itemsp:Ingredient[]) {

Array.prototype.push.apply(this.items,itemsp);

}

}
