import { Component, OnInit } from "@angular/core";
import { NavParams, Icon } from "ionic-angular";

@Component({
    selector: 'page-single-query',
    templateUrl: 'single-query.html',
})
export class SingleQueryPage implements OnInit{
    query: {
        name:string,
        image:Icon,
        post:string,
        like:number,
        answer:number,
        date: {
            month:string,
            day:number,
            year:number
        },
        time:number,
        postComment:string
    };
    constructor(public navParams: NavParams){}
    ngOnInit() {
        this.query = this.navParams.data;
    }
}