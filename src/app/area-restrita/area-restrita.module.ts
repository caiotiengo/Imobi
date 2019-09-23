import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AreaRestritaPage } from './area-restrita.page';

const routes: Routes = [
  {
    path: '',
    component: AreaRestritaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AreaRestritaPage]
})
export class AreaRestritaPageModule {}
