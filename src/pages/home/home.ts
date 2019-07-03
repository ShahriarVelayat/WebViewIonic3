import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InAppBrowser]
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,
    private platform: Platform) {

  }

  ionViewWillLoad() {
    var url = 'http://www.rivasgallery.ir/';
    const options: InAppBrowserOptions = {
      zoom: 'no',
      toolbar: 'no',
      location: 'no'
    };
    const browser = this.iab.create(url,'_self', options);

  }
  ngOnInit(){

}
 closeApp(){
    this.platform.exitApp();
  }

}
