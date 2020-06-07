import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { IPagination } from '../core/models/pagination';
import { IProductBrand } from '../core/models/productBrands';
import { IProductTypes } from '../core/models/productTypes';
import {map} from 'rxjs/operators';
import { ShopParams } from '../core/models/shopParams';
import { IProduct } from '../core/models/product';
import { of } from 'rxjs/internal/observable/of';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:44359/api/';


  constructor(private http: HttpClient ) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();
    if (shopParams.brandId !== 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.search ){
      params = params.append('search', shopParams.search);
    }
    if (shopParams.typeId !== 0 ){
      params = params.append('typeId', shopParams.typeId.toString());
    }
    params = params.append('sort', shopParams.sort.toString());
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params} )
    .pipe(
      map(response => {
        return response.body;
      })
    );
  }

  getBrands(){
    return this.http.get<IProductBrand[]>(
      this.baseUrl + 'products/brands'
    );
  }

  getTypes(){
    return this.http.get<IProductTypes[]>(
      this.baseUrl + 'products/types'
    );
  }

  getProduct(id: Guid) {
/*    const product = this.products.find(p => p.id === id);

    if (product) {
      return of(product);
    }
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);*/
    return this.http.get(this.baseUrl + 'products/' + id);
  }

}
