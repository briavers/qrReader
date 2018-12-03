import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('username') username ;
    @ViewChild('password') password ;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  signIn(){
      const alert = this.alertCtrl.create({
        title: this.username.value,
        subTitle: this.password.value,
        buttons: ['OK']
      });
      alert.present();
  }
  

}
