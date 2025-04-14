import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedesfunPage } from './redesfun.page';

const routes: Routes = [
  {
    path: '',
    component: RedesfunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedesfunPageRoutingModule {}
