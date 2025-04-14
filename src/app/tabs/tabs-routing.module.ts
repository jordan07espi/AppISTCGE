import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [ 
          {
            path: '', 
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'campus-virtual', 
            loadChildren: () => import('../pages/campus/campus.module').then( m => m.CampusPageModule)
          },
          {
            path: 'contactos',
            loadChildren: () => import('../pages/contactos/contactos.module').then( m => m.ContactosPageModule)
          },
          {
            path: 'redes',
            loadChildren: () => import('../pages/redes/redes.module').then( m => m.RedesPageModule)
          },
        ]
      },
      {
        path: 'tab2',
        children: [
          {path: '',
          loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'redesca',
            loadChildren: () => import('../pages/redescap/redescap.module').then( m => m.RedescapPageModule)
          },
        ]
        
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'redesfun',
            loadChildren: () => import('../pages/redesfun/redesfun.module').then( m => m.RedesfunPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '', 
            loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          },
          {
            path: 'tutoriales',
            loadChildren: () => import('../pages/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
