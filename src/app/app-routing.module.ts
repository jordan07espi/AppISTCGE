import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sga',
    loadChildren: () => import('./pages/instituto/sga/sga.module').then( m => m.SgaPageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./pages/instituto/correo/correo.module').then( m => m.CorreoPageModule)
  },
  {
    path: 'campus',
    loadChildren: () => import('./pages/instituto/campus/campus.module').then( m => m.CampusPageModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./pages/instituto/office/office.module').then( m => m.OfficePageModule)
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./pages/instituto/biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/instituto/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/instituto/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'denuncias',
    loadChildren: () => import('./pages/instituto/denuncias/denuncias.module').then( m => m.DenunciasPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
