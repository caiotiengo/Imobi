import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {IonicModule, IonicRouteStrategy, NavParams} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP} from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import firebaseConfig from './firebase';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserService} from './User';
import {AngularFirestore} from '@angular/fire/firestore';
import {ImovelService} from './Imovel';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()

  ],
  providers: [
    StatusBar,
      HTTP,
      SplashScreen,
    AngularFireDatabase,
    UserService,
      AngularFirestore,
      ImovelService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
