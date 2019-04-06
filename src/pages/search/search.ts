import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileShowPage } from '../profile/profile-show/profile-show';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient ) {}
  
    onChange() {
        console.log(this.search);

        this.http.get<{message: string, info: any}>('https://appconfer.herokuapp.com/confer/searchqs/'+this.search)
        .subscribe(res => {
            this.questions = res.info;
            console.log(res.message);
        });

        this.http.get<{message: string, info: any}>('https://appconfer.herokuapp.com/confer/searchpro/'+this.search)
        .subscribe(val => {
            this.profiles = val.info;
            console.log(val.message);
        });
    }
  
    goToProfile() {
        this.navCtrl.push(ProfileShowPage);
    }
}
