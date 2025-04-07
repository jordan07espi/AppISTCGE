import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampusPageRoutingModule } from './campus-routing.module';

import { CampusPage } from './campus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampusPageRoutingModule
  ],
  declarations: [CampusPage]
})
export class CampusPageModule {}
