import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  prodDetails: Product[];
  myDate: Date;
  input:number;
  arg:number;

  constructor(private _prodService: ProductService) { 
    this.myDate = new Date();
    this.input = 2;
    this.arg = 3;
  }

  getRatings(){
    this.prodDetails = this._prodService.getProducts();
    for(let prod of this.prodDetails){
      if (prod.prodName == 'iphone'){
        prod.prodRating = 4.5;
      }else if(prod.prodName == 'ipad'){
        prod.prodRating = 3.5;
      }else if(prod.prodName == 'ipod'){
        prod.prodRating = 2.5;
      }else if(prod.prodName == 'Mac'){
        prod.prodRating = 5;
      }
    }
  }
  ngOnInit() {
  }

}
