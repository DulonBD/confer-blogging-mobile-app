import { Component } from "@angular/core";
import { ProfileServicePage } from "../../services/profile-service";
import { ProfileEditPage } from "./profile-edit/profile-edit";
import { PostPage } from "./post/post";
import { AnswerPage } from "./answer/answer";
import { ModalController, ViewController, NavController } from "ionic-angular";
import { AuthServiceProvider } from "../../services/auth.service";
import { SignInPage } from "../sign-in/sign-in";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    profile = [];

    constructor ( 
        public profileService: ProfileServicePage, 
        public modalCtrl: ModalController,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public auth: AuthServiceProvider
    ){
        this.profileService.getProfile(this.auth.getUserInfo().email)
        .subscribe(res => {
            this.profile = res.response;
        });
    }

    openModal() {
        let modal = this.modalCtrl.create(ProfileEditPage);
        modal.present();
    }

    goToPost() {
        this.navCtrl.push(PostPage);
    }
    goToAnswer() {
        this.navCtrl.push(AnswerPage);
    }

    logout() {
        this.auth.logout();
        this.navCtrl.setRoot(SignInPage);
    }
}