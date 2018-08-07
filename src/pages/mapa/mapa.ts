import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  MyLocation
} from '@ionic-native/google-maps';
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  map: GoogleMap;

  ionViewDidLoad() {
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
  onButtonClick() {
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        })
          .then(() => {
            // add a marker
            let marker: Marker = this.map.addMarkerSync({
              title: '@ionic-native/google-maps plugin!',
              snippet: 'This plugin is awesome!',
              position: location.latLng,
            });

            // show the infoWindow
            marker.showInfoWindow();

            // If clicked it, display the alert
            // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            //   this.showToast('clicked!');
            // });
          });
      });
  }

}
