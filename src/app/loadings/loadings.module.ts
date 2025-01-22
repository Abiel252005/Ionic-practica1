import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingsPageRoutingModule } from './loadings-routing.module';

import { LoadingsPage } from './loadings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingsPageRoutingModule
  ],
  declarations: [LoadingsPage]
})
export class LoadingsPageModule {}
