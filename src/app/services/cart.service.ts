import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cart = new Cart();

public tp: number;

  constructor() { }


addcart(menu: Menu){
this.cart.memus.push(menu);
}

getmenus(){
  return this.cart.memus;
}

totalprice(){
  for (let i of this.cart.memus){
    this.tp=this.tp+i.price;
  }
  return this.tp;
}

reset(){
  this.cart = new Cart();
}

}
