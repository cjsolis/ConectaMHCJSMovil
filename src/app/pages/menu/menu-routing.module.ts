import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MenuPage } from './menu.page';
import { ExhibicionesPage } from '../exhibiciones/exhibiciones.page';
import { EventosPage } from '../eventos/eventos.page';
import { GaleriaPage } from '../galeria/galeria.page';
import { CatalogoPage } from '../catalogo/catalogo.page';
import { MapaPage } from '../mapa/mapa.page';
import { ContactoPage } from '../contacto/contacto.page';

const routes: Routes = [

  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'exhibiciones',
        outlet: 'menucontent',
        component: ExhibicionesPage
      },
      {
        path: 'eventos',
        outlet: 'menucontent',
        component: EventosPage
      },
      {
        path: 'galeria',
        outlet: 'menucontent',
        component: GaleriaPage
      },
      {
        path: 'catalogo',
        outlet: 'menucontent',
        component: CatalogoPage
      },
      {
        path: 'mapa',
        outlet: 'menucontent',
        component: MapaPage
      },
      {
        path: 'contacto',
        outlet: 'menucontent',
        component: ContactoPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/(menucontent:exhibiciones)'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
