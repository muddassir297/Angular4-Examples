import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  email ;
  address: Address;
  hobbies: string [];
  flag:boolean;
  imagepath: string;

  constructor() {
    this.title = 'welcome',
    this.email = 'test@techm.com',
    this.address = {
      city: 'San Diago',
      state: 'California',
      country: 'US'
    };
    this.hobbies = ['Music', 'video', 'Games'];
    this.flag = false;
    this.imagepath = '../assets/pancard.jpg';
  }
  playHobby():void{
    this.flag = !this.flag;
  }

  addHobby(hob):void{
    if (hob != ""){
      this.hobbies.push(hob);
    }
  }
}

interface Address {
  city: string;
  state: string;
  country: string;
}
