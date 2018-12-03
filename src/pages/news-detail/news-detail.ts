import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { ProvidersFirebaseProvider } from '../../providers/providers-firebase/providers-firebase';
import { map } from 'rxjs/operators'
import { News } from '../../model/news';
/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  newsDetail : Observable<News[]>
  id = '1'

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad() {
    this.newsDetail = this.navParams.get('news');
    console.log('this.newsDetail')
    console.log(this.newsDetail)
  }

}
