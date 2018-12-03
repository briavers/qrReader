import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsFeedPage } from '../pages/news-feed/news-feed';
import { NewsDetailPage } from '../pages/news-detail/news-detail';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProvidersFirebaseProvider } from '../providers/providers-firebase/providers-firebase';
import { TruncatePipe } from '../pipes/truncate/truncate';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
const firebaseAuth = {
  apiKey: "AIzaSyAffOFfFFr1jyCjss8kd_MlWX5uce_uH_M",
  authDomain: "wot-studentguide.firebaseapp.com",
  databaseURL: "https://wot-studentguide.firebaseio.com",
  projectId: "wot-studentguide",
  storageBucket: "",
  messagingSenderId: "999157797346"

}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsFeedPage,
    NewsDetailPage,
    TruncatePipe
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    NgxQRCodeModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsFeedPage,
    NewsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    ProvidersFirebaseProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
