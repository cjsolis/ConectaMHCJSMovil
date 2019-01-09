import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-elementoexh',
  templateUrl: './elementoexh.page.html',
  styleUrls: ['./elementoexh.page.scss'],
})
export class ElementoexhPage implements OnInit {

  received_data : {}
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.received_data = this.navParams.get('sent_data');
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
