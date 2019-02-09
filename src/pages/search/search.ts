import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchServicePage } from '../../services/search-service';
import { ProfileShowPage } from '../profile/profile-show/profile-show';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit{
  suggestions;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private suggestionService:SearchServicePage ) {}
  
  ngOnInit() {
    this.suggestions = this.suggestionService.suggestions;
  }
  
  goToProfile() {
    this.navCtrl.push(ProfileShowPage);
  }
}
