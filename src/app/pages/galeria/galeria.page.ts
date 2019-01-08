import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ElementoqrPage } from '../elementoqr/elementoqr.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  images = [
    {
      id: 1,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmhcjs007-e1b459642b.jpg?alt=media&token=7ad4abe3-d2a9-4da6-a98a-cc0f60e02d8b'
    },
    {
      id: 2,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmhcjs009-d180b51708.jpg?alt=media&token=d3a8bf2d-fcf5-48a3-b75c-e55321dfaf45'
    },
    {
      id: 3,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmhcjs010-d8375c99de.jpg?alt=media&token=44ca63cb-3e1f-4c34-ba7a-f86865367bcf'
    },
    {
      id: 4,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmhcjs011-56fe1e03c9.jpg?alt=media&token=df5563a4-9d7a-4d11-a4ea-581c49e49cba'
    },
    {
      id: 5,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmhcjs012-630013e8ba.jpg?alt=media&token=979df436-1351-4d20-b7fd-5e7704427f1e'
    },
    {
      id: 6,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmuseo-interior-5-202be216b5.jpg?alt=media&token=c4c690f5-1bcd-486c-b0d1-1d8c816c63fc'
    },
    {
      id: 7,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmuseo-interior-3-e2f1a9a9a9.jpg?alt=media&token=eb352981-51ff-4313-9e7f-3124ed3762e7'
    },
    {
      id: 8,
      url: 'https://firebasestorage.googleapis.com/v0/b/conectamhcjs2019.appspot.com/o/galeria%2Fmuseo-exterior-3-e8e9940f48.jpg?alt=media&token=a5628607-3f89-40b6-94e0-a0cf56a4e83a'
    },
  ]

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

}
