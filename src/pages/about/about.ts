import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data = null; 
  hasData = false; 

  constructor(public navCtrl: NavController,private barCodeScanner: BarcodeScanner) {

  }

  readCode(){
  this.barCodeScanner.scan().then(barcodeData => {
    this.data = barcodeData.text;
    this.hasData = true;
  })
  }
}
