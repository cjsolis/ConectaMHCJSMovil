import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-elementoqr',
  templateUrl: './elementoqr.page.html',
  styleUrls: ['./elementoqr.page.scss'],
})
export class ElementoqrPage implements OnInit {

  received_data : {}
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.received_data = this.navParams.get('sent_data');
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
