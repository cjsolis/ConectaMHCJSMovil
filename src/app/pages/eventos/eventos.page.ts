import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ElementoqrPage } from '../elementoqr/elementoqr.page';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  scannedData : {};
  barcodeScannerOptions:BarcodeScannerOptions;

  eventos = [
    {
      id: 1,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Museo_Historico_Juan_Santamaria_-02_cr.jpg/800px-Museo_Historico_Juan_Santamaria_-02_cr.jpg',
      title: 'Día de San Patricio.',
      date: '2019-01-27',
      time: '1:00 pm',
      description: 'asdf',
      place: 'Museo Histórico Cultural Juan Santamaría'
    },
    {
      id: 2,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Museo_Historico_Juan_Santamaria_-02_cr.jpg/800px-Museo_Historico_Juan_Santamaria_-02_cr.jpg',
      title: 'Día del Trabajador.',
      date: '2019-01-27',
      time: '1:00 pm',
      description: 'asdf',
      place: 'Museo Histórico Cultural Juan Santamaría'
    },
    {
      id: 3,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Museo_Historico_Juan_Santamaria_-02_cr.jpg/800px-Museo_Historico_Juan_Santamaria_-02_cr.jpg',
      title: 'Celebración del 19 aniversario.',
      date: '2019-01-27',
      time: '1:00 pm',
      description: 'asdf',
      place: 'Museo Histórico Cultural Juan Santamaría'
    },
    {
      id: 4,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Museo_Historico_Juan_Santamaria_-02_cr.jpg/800px-Museo_Historico_Juan_Santamaria_-02_cr.jpg',
      title: 'Celebración a la Independencia',
      date: '2019-01-27',
      time: '1:00 pm',
      description: 'asdf',
      place: 'Museo Histórico Cultural Juan Santamaría'
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
      this.openModal();           // Llama al método que se encarga de abrir la siguiente pestaña, en donde se mostrará los elementos escaneados.
     }).catch(err => {
         console.log('Error', err);
     });
  }

  /** Método encargado de abrir la siguiente página y de enviar un 
   * dato a esta **/
  async openModal() {
    const modal = await this.modalController.create({
      component: ElementoqrPage,
      componentProps: {
        sent_data: this.scannedData
      }
    });
    modal.present();
  }

}
