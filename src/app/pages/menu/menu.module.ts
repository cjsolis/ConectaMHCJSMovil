import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu-routing.module';
import { ExhibicionesPageModule } from '../exhibiciones/exhibiciones.module';
import { CatalogoPageModule } from '../catalogo/catalogo.module';
import { ContactoPageModule } from '../contacto/contacto.module';
import { EventosPageModule } from '../eventos/eventos.module';
import { GaleriaPageModule } from '../galeria/galeria.module';
import { MapaPageModule } from '../mapa/mapa.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    ExhibicionesPageModule,
    CatalogoPageModule,
    ContactoPageModule,
    EventosPageModule,
    GaleriaPageModule,
    MapaPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
