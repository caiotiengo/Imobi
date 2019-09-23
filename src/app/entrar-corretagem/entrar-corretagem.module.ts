import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntrarCorretagemPage } from './entrar-corretagem.page';

const routes: Routes = [
  {
    path: '',
    component: EntrarCorretagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntrarCorretagemPage]
})
export class EntrarCorretagemPageModule {}
