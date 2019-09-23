import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntrarSeguroPage } from './entrar-seguro.page';

const routes: Routes = [
  {
    path: '',
    component: EntrarSeguroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntrarSeguroPage]
})
export class EntrarSeguroPageModule {}
