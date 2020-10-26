import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogeadoPage } from './logeado.page';


import { MenuPageModule } from '../menu/menu.module';
import { LoginPageModule } from '../login/login.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LogeadoPage
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageModule,
    LoginPageModule
  ],
  declarations: [LogeadoPage]
})
export class LogeadoPageModule {}