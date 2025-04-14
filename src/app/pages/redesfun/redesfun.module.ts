import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesfunPageRoutingModule } from './redesfun-routing.module';

import { RedesfunPage } from './redesfun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesfunPageRoutingModule
  ],
  declarations: [RedesfunPage]
})
export class RedesfunPageModule {}
