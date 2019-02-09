import { Component, OnInit } from "@angular/core";
import { ProfileShowServicePage } from "../../../services/proShow-service";

@Component({
    selector: 'page-profile-show',
    templateUrl: 'profile-show.html',
})
export class ProfileShowPage implements OnInit{
    profile;
    constructor(
        private showProfile:ProfileShowServicePage
    ) {}

    ngOnInit() {
        this.profile = this.showProfile.showProfiles;
    }
}