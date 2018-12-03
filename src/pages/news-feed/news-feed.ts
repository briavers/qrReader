import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'
import { News } from '../../model/news';
import { ProvidersFirebaseProvider } from '../../providers/providers-firebase/providers-firebase'
import {TruncatePipe} from '../../pipes/truncate/truncate';
/**
 * Generated class for the NewsFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-feed',
  templateUrl: 'news-feed.html',
})
export class NewsFeedPage {
  newsFeed: Observable <News[]>
  detailPage = NewsDetailPage

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsListService: ProvidersFirebaseProvider) {
    this.newsFeed = this.newsListService.getNewsList()
      .snapshotChanges()
      .pipe(
      map(
          changes =>
            changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
            }))
        )
      );
    
    }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsFeedPage');
  }

  goToDetail(){
    this.navCtrl.push('page-news-detail')
  }
}

