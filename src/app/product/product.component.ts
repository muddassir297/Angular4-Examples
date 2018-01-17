import { Component, OnInit } from '@angular/core';
import {Product} from'../product';
import {ProductService} from'../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
productObj: Product;
productArray: Product [];
  constructor(private _prodService:ProductService) {
    this.productObj = new Product(); 
    this.productObj.prodId = 100;
    this.productObj.prodName = 'XX';
    this.productObj.prodPrice = 1000;

    
  }
  loadProducts(){
    this.productArray = this._prodService.getProducts();
  }

  clearDetails(): void{
    this.productObj.prodId = null;
    this.productObj.prodName = '';
    this.productObj.prodPrice = null;
  }
  ngOnInit() {
  }

}
