import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { News } from '../../model/news';
/*
  Generated class for the ProvidersFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersFirebaseProvider {
  private newsListRef = this.db.list<News>('news');
  
 
  constructor(private db: AngularFireDatabase) { }

  getNewsList() {
    return this.newsListRef;
  }
  
  getNewsDetail(id){
    return this.db.list<News>('news/' + id)
  }

  addNews(news: News) {
    return this.newsListRef.push(news);
  }

  updateNews(news: News) {
    return this.newsListRef.update(news.key, news);
  }

  removeNews(news: News) {
    return this.newsListRef.remove(news.key);
  }
}