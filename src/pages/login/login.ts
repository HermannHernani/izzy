import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  msg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private touchId: TouchID) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.touchId.isAvailable()
      .then(
        res => {
          this.touchId.verifyFingerprint('Entrar no sistema')
            .then(
              res => this.navCtrl.setRoot(HomePage),
              err => this.msg = "Erro ao entrar!"
            );
        },
        err => {
          this.msg = "Recurso não disponível";
          this.navCtrl.setRoot(HomePage);
        }
      );
  }
}
