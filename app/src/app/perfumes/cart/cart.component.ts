import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/core/interfaces/Cart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart | undefined;
  constructor(private cartServise: CartService) {
    this.cartServise.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  changeQuantity(cartItem: CartItem, quantityInString: string){
    const quantity = Number(quantityInString);
    this.cartServise.changeQuantity(cartItem.perfume._id, quantity); 
  }

  removeFromCart(cartItem: CartItem){
    this.cartServise.removeFromCart(cartItem.perfume._id);
  }
}
