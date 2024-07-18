import { Product } from './product'; 

export class Category {
  categoryId: number;
  name: string;
  description: string;
  products: Product[];

  constructor(
    categoryId: number,
    name: string,
    description: string,
    products: Product[]
  ) {
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
    this.products = products;
  }
}
