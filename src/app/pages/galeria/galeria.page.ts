import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ElementoqrPage } from '../elementoqr/elementoqr.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  scannedData: {};
  decoded_data : any;
  barcodeScannerOptions: BarcodeScannerOptions;

  url = 'https://conectamhcjs.herokuapp.com/api/qr/galeria';
  constructor(private barcodeScanner: BarcodeScanner, private modalController: ModalController, private photoViewer:PhotoViewer, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getHttpElement(this.url);
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
  openImage(url: string, title: string){
    this.photoViewer.show(url, title);
  }

  getHttpElement(elem: string){
    this.httpClient.get(elem)
    .subscribe(res => {
      console.log('Elemento generado en el res: ', res);
      this.decoded_data = res;
      console.log('Elemento conseguido de la lecutra del HTtP', this.decoded_data);

    })
  }

}
