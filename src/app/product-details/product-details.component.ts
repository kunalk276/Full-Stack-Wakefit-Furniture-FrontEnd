import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
productId!:number;
product!:Product;
  router: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    this.productId=this.route.snapshot.params['productId'];
    this.product=new Product();
    this.productService.getProductById(this.productId).subscribe(data=>{
      this.product=data;
    })
  }

  
  goBack() {
    this.router.navigate(['/product']);
  }
}
