import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SgaPageRoutingModule } from './sga-routing.module';

import { SgaPage } from './sga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SgaPageRoutingModule
  ],
  declarations: [SgaPage]
})
export class SgaPageModule {}
