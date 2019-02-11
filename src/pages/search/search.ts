import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchServicePage } from '../../services/search-service';
import { ProfileShowPage } from '../profile/profile-show/profile-show';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  questions;
  profiles;
  search;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private srcService: SearchServicePage ) {}
  
    onChange() {
        this.srcService.searchQus(this.search)
        .subscribe(res => {
            this.questions = res.response;
        });

        this.srcService.searchPro(this.search)
        .subscribe(val => {
            this.profiles = val.response;
        });
    }
  
    goToProfile() {
        this.navCtrl.push(ProfileShowPage);
    }
}
