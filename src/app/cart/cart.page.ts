import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  count: number = 0;

  constructor() {}

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
  count1: number = 0;

 

  increment1() {
    this.count1++;
  }

  decrement1() {
    if (this.count1 > 0) {
      this.count1--;
    }
  }

  ngOnInit() {
  }

}
