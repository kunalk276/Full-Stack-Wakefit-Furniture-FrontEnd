import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product!: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProductList().subscribe(data => {
      this.product = data;
    });
  }

  productDetails(productId: number): void {
    this.router.navigate(['product-details', productId]);
  }

  updateProduct(productId: number): void {
    this.router.navigate(['update-product', productId]);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(data => {
      console.log(data);
      this.getProducts();
    });
  }
}
