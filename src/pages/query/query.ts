import { Component, OnInit } from "@angular/core";
import { QueryServicePage } from "../../services/query-service";
import { SingleQueryPage } from "./single-query/single-query";
import { NavController, LoadingController, Loading } from "ionic-angular";
import { ProfileShowPage } from "../profile/profile-show/profile-show";
import { AuthServiceProvider } from "../../services/auth.service";
import { ProfileServicePage } from "../../services/profile-service";

@Component ({
    selector: 'page-query',
    templateUrl: 'query.html',
})

export class QueryPage implements OnInit {
    query;
    username;
    profile;
    question = {title:'', detail:'', tags: ''};
    singleQueryPage = SingleQueryPage;
    loading: Loading;

    constructor(
        public queryService: QueryServicePage,
        public navCtrl: NavController,
        public auth: AuthServiceProvider,
        public profileService: ProfileServicePage,
        public loadingCtrl: LoadingController
    ) {}
    
    ngOnInit() {
        this.showLoading();
        this.queryService.getQuestions()
        .subscribe(val => {
            this.query = val.response;
            console.log(this.query);
        });
        this.stopLoading();
    }

    addQuestion() {
        const newTag = this.question.tags.split(',');
        const tagarr = [];
        newTag.forEach(val => {
            tagarr.push(val.trim().toUpperCase());
        });

        this.queryService.addQuestion(this.question.title, this.question.detail, tagarr, this.auth.getUserInfo().email)
        .subscribe(res => {
            if(res.status) {
                console.log('Added Question Successfully');
                this.question.title = '';
                this.question.detail = '';
                this.question.tags = '';
            }
        });
    }

    getUserProfile(email) {
        this.profileService.getProfile(email)
        .subscribe(res => {
            this.username = res.response.name;
        });

        return this.username;
    }

    getTime(res) {
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

    goToProfile() {
        this.navCtrl.push(ProfileShowPage);
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