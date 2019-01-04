import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElementoqrPage } from './elementoqr.page';

const routes: Routes = [
  {
    path: '',
    component: ElementoqrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElementoqrPage]
})
export class ElementoqrPageModule {}
