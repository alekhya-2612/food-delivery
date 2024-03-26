import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public segment: string = "list";
  public arr = new Array(40);
  

  constructor() {}

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  ngOnInit() {
  }

}
