import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController, Loading } from "ionic-angular";
import { AuthServiceProvider } from "../../../services/auth.service";
import { QueryServicePage } from "../../../services/query-service";
import { ProfileServicePage } from "../../../services/profile-service";

@Component({
    selector: 'page-single-query',
    templateUrl: 'single-query.html',
})
export class SingleQueryPage {
    querydts = [];
    comm;
    username;
    loading: Loading;
    constructor (
        public navParams: NavParams, 
        public queryService: QueryServicePage,
        public navCtrl: NavController,
        public auth: AuthServiceProvider,
        public profileService: ProfileServicePage,
        public loadingCtrl: LoadingController
    ){
        this.showLoading();
        this.getDts();
    }

    getDts() {
        this.queryService.getQuestionDts(this.navParams.data.val)
        .subscribe(res => {
            this.querydts = res.response;
            console.log(this.querydts);
        });
        this.stopLoading();
    }

    getTime(res) {
        console.log(res);
        
        const resDate = res.split('T', 1);
        const resDate1 = new Date(resDate);
        const today = new Date();
        const timeDiff = Math.abs(today.getTime() - resDate1.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if(diffDays <= 1) {
            return 'Today'
        } else {
            return diffDays - 1+" Day ago";
        }
    }

    getUserProfile(email) {
        this.profileService.getProfile(email)
        .subscribe(res => {
            this.username = res.response.name;
        });

        return this.username;
    }

    addComments() {
        this.queryService.addComment(this.navParams.data.val, this.comm, this.auth.getUserInfo().name, this.auth.getUserInfo().email);
        this.comm = '';
    }

    getComments(id, ) {
        //console.log(comments);
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
          content: `<img src="./../../../assets/imgs/loader.gif"/>`,
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