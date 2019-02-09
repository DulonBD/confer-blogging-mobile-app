import { Component, OnInit } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';
import { ProfileServicePage } from '../../../services/profile-service';
import { AuthServiceProvider } from '../../../services/auth.service';


@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html'
})
export class ProfileEditPage implements OnInit {
    updateprofile = {name: '', bio: '', dept: '', batch: '', dob: '', tags: '', password: ''};

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public profileService: ProfileServicePage,
        private auth: AuthServiceProvider
    ) {}

    ngOnInit() {
        this.profileService.getProfile(this.auth.getUserInfo().email)
        .subscribe(res => {
            this.updateprofile = {
                name: res.response.name, 
                bio: res.response.bio, 
                dept: res.response.dept, 
                batch: res.response.batch, 
                dob: res.response.dob, 
                tags: res.response.tags, 
                password: res.response.password
            };
        });
        console.log(this.updateprofile.dept);
    }

    update() {
        const newTag = this.updateprofile.tags.split(',');
        const tagarr = [];
        newTag.forEach(val => {
            tagarr.push(val.trim().toUpperCase());
        });
        
        const update = {
            name: this.updateprofile.name,
            password: this.updateprofile.password,
            bio: this.updateprofile.bio, 
            dept: this.updateprofile.dept, 
            batch: this.updateprofile.batch, 
            dob: this.updateprofile.dob, 
            tags: tagarr,
        }
        this.profileService.updateProfile(this.auth.getUserInfo().email, update);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}