import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-rating-child',
  templateUrl: './rating-child.component.html',
  styleUrls: ['./rating-child.component.css']
})
export class RatingChildComponent implements OnInit, OnChanges {
  @Input() productObj: Product;
  @Input() pName : string;

  constructor() { }
  
  ngOnInit() {
    if (this.productObj.prodName == 'iphone'){
        this.productObj.prodRating = 4.5;
      }else if(this.productObj.prodName == 'ipad'){
        this.productObj.prodRating = 3.5;
      }else if(this.productObj.prodName == 'ipod'){
        this.productObj.prodRating = 2.5;
      }else if(this.productObj.prodName == 'Mac'){
        this.productObj.prodRating = 5;
      }
  }
  ngOnChanges(changes: SimpleChanges){
   
    //let pName: SimpleChange = changes.productObj;
    if (changes.pName){
      console.log('prev value: ', changes.pName.previousValue);
      console.log('got name: ', changes.pName.currentValue);
    }    
  }

}
