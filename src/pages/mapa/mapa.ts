///<reference path="../../../node_modules/@ionic-native/google-maps/index.d.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@IonicPage()

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    this.loadMap();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

}

