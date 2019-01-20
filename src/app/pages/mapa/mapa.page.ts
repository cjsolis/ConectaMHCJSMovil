import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController, IonSlides } from '@ionic/angular';
import { ElementoqrPage } from '../elementoqr/elementoqr.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  scannedData: {};
  slideSelected: number;
  barcodeScannerOptions: BarcodeScannerOptions;

  maps = [ // Variable donde se almacenan los mapas 
    {
      floor: 1,
      index: 0,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/Piso%201.jpg?alt=media&token=1a000161-8ee1-4e55-b4ad-3c28218eba24' 
    },
    {
      floor: 2,
      index: 1,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/Piso%202.jpg?alt=media&token=fe5326ea-e64f-4bfe-967a-245321b07d1c'
    }
  ]


  @ViewChild('slidesElem') slides;
  constructor(private barcodeScanner: BarcodeScanner, private modalController: ModalController, private photoViewer:PhotoViewer) { }

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

  /** Método para abrir una imágen por medio del url. **/
  openImage(url: string){
    this.photoViewer.show(url);
  }

  /** Método para cambiar de slide **/
  selecSlide(index: number){
    this.slides.slideTo(index);
    this.slideSelected = index;
  }

}
