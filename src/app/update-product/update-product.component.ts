import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId!:number;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.productId = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe(
      data => {
        this.product = data;
      },
      error=>console.log(error));
    
  }

  onSubmit() 
  {
     this.productService.updateProduct(this.productId,this.product).subscribe(data=>{
      this.goToProductList();
     },error=>console.log(error));
  
      }
  goToProductList() {
    this.router.navigate(['/product']);
  }

  
}
