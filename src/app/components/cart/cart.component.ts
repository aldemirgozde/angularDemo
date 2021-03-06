import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public kitchenId;
  public cart;
  public errorMsg;
  public menus;

  constructor(private empService: CartService, private route: ActivatedRoute, private router: Router,public nav: NavService) { }

  ngOnInit(): void {
    this.nav.show();
    /*this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.kitchenId = id;
      console.log(this.kitchenId);
    });*/

    /*this.empService.getCartsByUserId(1).subscribe(
      (data) => {
        this.cart = data; 
        console.log(data); 
        this.menus=this.cart;
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );*/
    //this.menus=data.menu;
    this.menus= this.empService.getmenus();
  }

  goBack(){
      this.router.navigate(['/kitchens']);
  }
}
