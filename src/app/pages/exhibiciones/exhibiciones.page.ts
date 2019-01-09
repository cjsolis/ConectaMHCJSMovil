import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ElementoqrPage } from '../elementoqr/elementoqr.page';
import { ElementoexhPage } from '../elementoexh/elementoexh.page';

@Component({
  selector: 'app-exhibiciones',
  templateUrl: './exhibiciones.page.html',
  styleUrls: ['./exhibiciones.page.scss'],
})
export class ExhibicionesPage implements OnInit {

  scannedData : {};
  barcodeScannerOptions:BarcodeScannerOptions;

  exhibiciones = [
    {
      nombre: 'Caminos de Libertad',
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/exhibiciones%2Fexhibiciones.jpg?alt=media&token=9a696bd6-0f07-47ad-a193-4fa3397d383a',
      descripcion: 'Esta es una de las funciones que mejor identifican a los museos. La temática de la exposición permanente “Caminos de libertad” es la historia de la Campaña Nacional 1856-1857. A lo largo de seis salas de exhibición se presenta el desarrollo histórico de la guerra que libró Costa Rica contra los filibusteros. Constituye una visión no tradicional  de la historia con una interacción constante entre el visitante y la exhibición.'
    },
    {
      nombre: 'Imprenta de Sibaja',
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/exhibiciones%2Fimprenta-sibaja2.jpg?alt=media&token=494b64f8-417f-4284-8951-d3bcd779e5db',
      descripcion: 'La exhibición permanente sobre la “Imprenta de Sibaja”, mostrará la historia de la imprenta en Costa Rica. Esta exhibición estará constituida por la maquinaria del primer taller de impresión que funcionó en Alajuela y que perteneció a la familia Sibaja. Durante el año 2014 la sala estará en proceso de montaje para que pueda ser disfrutada por los visitantes al Museo a partir del año 2015.'
    }
  ]

  constructor(private barcodeScanner: BarcodeScanner, private modalController: ModalController) { }

  ngOnInit() {
  }

  /** Método que permite escanear un código QR. 
   *  Utiliza el método scan() de la biblioteca BarcodeScanner,
   * dentro de él se puede ingresar las opciones que se deseen 
   * configurar, ya sea para poder encender la linterna del teléfono,
   * girar la cámara, etc. **/
  scanCode(){
    this.barcodeScanner.scan(
      this.barcodeScannerOptions = {
      showTorchButton:true,       // Mostrar botón de linterna.
      showFlipCameraButton:false, // Mostrar botón para voltear cámara.
      prompt:"",                  // Mensaje al pie de la pantalla
      resultDisplayDuration:0,    // Mensaje cuando se detecta un código
      disableSuccessBeep:true     // Sonido cuando se detecta un código
    }).then(barcodeData => {      // Acá se deberá validar que lo que contiene el código QR sea relevante para la aplicación.
      //alert('Barcode data '+JSON.stringify(barcodeData));
      this.scannedData = barcodeData; // Almacena lo que se escaneó en una variable tipo objeto.
      this.openModalQRElem();         // Llama al método que se encarga de abrir la siguiente pestaña, en donde se mostrará los elementos escaneados.
     }).catch(err => {
         console.log('Error', err);
     });
  }

  /** Método encargado de abrir la siguiente página y de enviar un 
   * dato a esta **/
  async openModalQRElem() {
    const modal = await this.modalController.create({
      component: ElementoqrPage,
      componentProps: {
        sent_data: this.scannedData   // Envía la consulta a la siguiente page
      }
    });
    modal.present();
  }

    /** Método encargado de abrir la página del elemento qr y de enviar un 
   * dato a esta **/
  async openModalExhElem() {
    const modal = await this.modalController.create({
      component: ElementoexhPage,
      componentProps: {
        sent_data: this.scannedData
      }
    });
    modal.present();
  }

}
