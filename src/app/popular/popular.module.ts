import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularPageRoutingModule } from './popular-routing.module';

import { PopularPage } from './popular.page';

const alertButtons = [
  {
    text: 'No',
    cssClass: 'alert-button-cancel',
  },
  {
    text: 'Yes',
    cssClass: 'alert-button-confirm',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularPageRoutingModule
  ],
  declarations: [PopularPage]
})
export class PopularPageModule {}
