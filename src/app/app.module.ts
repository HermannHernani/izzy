import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { TouchID } from '@ionic-native/touch-id';
import {GoogleMapOptions, GoogleMaps, Marker} from "@ionic-native/google-maps";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapaPage} from "../pages/mapa/mapa";

//ios AIzaSyApg6XT0vUQMCCkOejUvEpCa7fJHG8ufUU
//android

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    TouchID,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
