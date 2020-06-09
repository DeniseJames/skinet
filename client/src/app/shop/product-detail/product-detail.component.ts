import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { Guid } from 'guid-typescript';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  quantity = 1;

  constructor(private bcService: BreadcrumbService, private shopService: ShopService, private activatedRoute: ActivatedRoute) {
    this.bcService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

loadProduct(){
    this.shopService.getProduct(Guid.parse(this.activatedRoute.snapshot.paramMap.get('id')))
   .subscribe
   (product => {
    this.product = product;
    this.bcService.set('@productDetails', product.name);
  }, error => {
    console.log(error);
  });
}
}
