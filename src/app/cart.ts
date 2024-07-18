import { User } from './user'; 
import { Product } from './product'; 
import { Order } from './order'; 

export class Cart {
  cartId: number;
  user: User;
  products: Product[];
  orders: Order[];

  constructor(
    cartId: number,
    user: User,
    products: Product[],
    orders: Order[]
  ) {
    this.cartId = cartId;
    this.user = user;
    this.products = products;
    this.orders = orders;
  }
}
