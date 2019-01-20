import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elementoqr',
  templateUrl: './elementoqr.page.html',
  styleUrls: ['./elementoqr.page.scss'],
})
export class ElementoqrPage implements OnInit {

  received_data: {};
  decoded_data = [];
  decoded_data2: any;
  url = '';

  constructor(private navParams: NavParams, private modalController: ModalController, private httpClient: HttpClient) { }

  ngOnInit() {
    this.received_data = this.navParams.get('sent_data');
    console.log('Elemento recibido de el lector QR', this.received_data);
    this.url = 'https://conectamhcjs.herokuapp.com' + this.received_data['text'];
    console.log('Url completa: ', this.url);
    this.getHttpElement(this.url);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  getHttpElement(elem: string){
    this.httpClient.get(elem)
    .subscribe(res => {
      console.log('Elemento conseguido de la lecutra del HTtP', res);
      this.decoded_data2 = res;

    })
  }


}
