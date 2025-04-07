import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SgaPage } from './sga.page';

const routes: Routes = [
  {
    path: '',
    component: SgaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SgaPageRoutingModule {}
