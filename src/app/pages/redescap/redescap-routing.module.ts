import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedescapPage } from './redescap.page';

const routes: Routes = [
  {
    path: '',
    component: RedescapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedescapPageRoutingModule {}
