import { Component, OnInit } from "@angular/core";
import { QueryServicePage } from "../../services/query-service";
import { SingleQueryPage } from "./single-query/single-query";
import { NavController } from "ionic-angular";
import { ProfileShowPage } from "../profile/profile-show/profile-show";
import { AuthServiceProvider } from "../../services/auth.service";
import { ProfileServicePage } from "../../services/profile-service";

@Component ({
    selector: 'page-query',
    templateUrl: 'query.html',
})

export class QueryPage implements OnInit {
    query;
    profile;
    question = {title:'', detail:'', tags: ''};
    singleQueryPage = SingleQueryPage;

    constructor(
        public queryService: QueryServicePage,
        public navCtrl: NavController,
        public auth: AuthServiceProvider,
        public profileService: ProfileServicePage
    ) {}
    
    ngOnInit() {
        this.queryService.getQuestions()
        .subscribe(val => {
            this.query = val.response;
            console.log(this.query);
        });
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
            return res.response.name;
        });
    }

    goToProfile() {
        this.navCtrl.push(ProfileShowPage);
    }
}