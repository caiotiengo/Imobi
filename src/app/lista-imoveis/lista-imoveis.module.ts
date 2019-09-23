import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaImoveisPage } from './lista-imoveis.page';

const routes: Routes = [
  {
    path: '',
    component: ListaImoveisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaImoveisPage]
})
export class ListaImoveisPageModule {}
