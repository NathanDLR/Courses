import { Injectable } from '@angular/core';
import { Items } from '../classes/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsArrayService {

  items: Items[];

  constructor() { 
    this.items = [];
  }

  // Add item to array 
  addItem(item: Items){
    this.items.push(item);
  }

  // Create new item
  createNewItem(title:string, rating:number): Items{
    return new Items(title, rating);
  }

}
