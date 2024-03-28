import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {

  constructor() { }
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  

  ngOnInit() {
  }
  

}
