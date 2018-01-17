import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProductService {
productDetails: Product[];

  constructor() { 
    this.productDetails = [
        {"prodId": 101, "prodName": "iphone", "prodPrice":65000},
        {"prodId": 102, "prodName": "ipad", "prodPrice":25000},
        {"prodId": 103, "prodName": "ipod", "prodPrice":5000},
        {"prodId": 104, "prodName": "Mac", "prodPrice":165000}
      ]
    }

    getProducts():Product[] {
        return this.productDetails;
    }
}
