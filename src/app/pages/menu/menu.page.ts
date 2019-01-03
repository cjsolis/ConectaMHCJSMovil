import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // Variable donde se almacena el path al page que fue seleccionado
  selectedPath = '';

  // Variable tipo lista que almacena objetos los cuales son las pages del sidemenu
  pages = [
    {
      title: 'Exhibiciones',
      url: '/menu/(menucontent:exhibiciones)',
      icon: 'home'
    },
    {
      title: 'Eventos',
      url: '/menu/(menucontent:eventos)',
      icon: 'calendar'
    },
    {
      title: 'Galería',
      url: '/menu/(menucontent:galeria)',
      icon: 'images'
    },
    {
      title: 'Catálogo de Piezas',
      url: '/menu/(menucontent:catalogo)',
      icon: 'book'
    },
    {
      title: 'Mapa del Museo',
      url: '/menu/(menucontent:mapa)',
      icon: 'map'
    },
    {
      title: 'Contacto',
      url: '/menu/(menucontent:contacto)',
      icon: 'information-circle'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
