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
  received_data2: {};

  constructor(private navParams: NavParams, private modalController: ModalController, private httpClient: HttpClient) { }

  ngOnInit() {
    this.received_data = this.navParams.get('sent_data');
    this.getHttpElement(this.received_data['text']);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  getHttpElement(elem: string){
    this.httpClient.get(elem)
    .subscribe(res => {
      console.log(res);
      console.log(res['results']);
      this.decoded_data = this.decoded_data.concat(res['results']);
      console.log(this.decoded_data);
      console.log(this.decoded_data[0].name.first);
    })
  }


}
