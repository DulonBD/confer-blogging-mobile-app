import { Component, OnInit } from "@angular/core";
import { NavParams } from "ionic-angular";
import { QueryServicePage } from "../../../services/query-service";

@Component({
    selector: 'page-single-query',
    templateUrl: 'single-query.html',
})
export class SingleQueryPage implements OnInit{
    query;
    constructor(public navParams: NavParams, public queryService: QueryServicePage){}

    ngOnInit() {
        this.queryService.getQuestionDts(this.navParams.data)
        .subscribe(val => {
            this.query = val.response;
        });
    }
}