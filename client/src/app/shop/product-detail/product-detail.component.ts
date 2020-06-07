import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product';
import { ShopService } from '../shop.service';
import { Guid } from 'guid-typescript';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
 //this.shopService.getProduct(Guid.parse('dba3ac76-1201-4fe1-8460-8d5de684886c'))
    this.shopService.getProduct(Guid.parse(this.activatedRoute.snapshot.paramMap.get('id')))
   .subscribe
   (product => {this.product = product;
  }, error => {
    console.log(error);
  });
  }
}
