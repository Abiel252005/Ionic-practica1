import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingsPage } from './loadings.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingsPageRoutingModule {}
