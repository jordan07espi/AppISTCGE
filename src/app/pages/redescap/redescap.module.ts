import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedescapPageRoutingModule } from './redescap-routing.module';

import { RedescapPage } from './redescap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedescapPageRoutingModule
  ],
  declarations: [RedescapPage]
})
export class RedescapPageModule {}
