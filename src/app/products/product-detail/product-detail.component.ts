import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: IProduct;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { 
    console.log(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(
      product => this.product = product,
      err => console.log(err)
    );
  }

  onBack(): void{
    this.router.navigate(['products'])
  }
}
