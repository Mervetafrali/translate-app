import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabnavPageRoutingModule } from './tabnav-routing.module';

import { TabnavPage } from './tabnav.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabnavPage,
    children: [
      {
        path: 'dictionary',
        loadChildren: () => import('../dictionary/dictionary.module').then(m => m.DictionaryPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      }      
    ]
  },
  {
    path: '',
    redirectTo: '/tab-nav/home'
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabnavPage]
})
export class TabnavPageModule {}
