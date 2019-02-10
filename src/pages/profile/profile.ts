import { Component } from "@angular/core";
import { ProfileServicePage } from "../../services/profile-service";
import { ProfileEditPage } from "./profile-edit/profile-edit";
import { PostPage } from "./post/post";
import { AnswerPage } from "./answer/answer";
import { ModalController, ViewController, NavController, LoadingController, Loading } from "ionic-angular";
import { AuthServiceProvider } from "../../services/auth.service";
import { SignInPage } from "../sign-in/sign-in";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    profile = [];
    loading: Loading;

    constructor ( 
        public profileService: ProfileServicePage,
        public modalCtrl: ModalController,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public auth: AuthServiceProvider,
        public loadingCtrl: LoadingController
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

    showLoading() {
        this.loading = this.loadingCtrl.create({
          content: `<img src="./../../assets/imgs/loader.gif"/>`,
          spinner: 'hide',
          cssClass: 'my-loading-class',
          dismissOnPageChange: true
        });
        this.loading.present();
        this.loading.present();
    }
    
    stopLoading() {
        this.loading.dismiss();
    }
}