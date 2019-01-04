import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' }
  //{ path: 'elementoqr', loadChildren: './pages/elementoqr/elementoqr.module#ElementoqrPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
