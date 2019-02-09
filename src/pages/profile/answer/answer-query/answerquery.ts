import { Component, OnInit } from "@angular/core";
import { AnsQueryServicePage } from "../../../../services/ansQuery-service";

@Component({
    selector: 'page-answer-query',
    templateUrl: 'answerquery.html'
})

export class AnswerQueryPage implements OnInit{
    query;
    constructor(
        public ansServicePage: AnsQueryServicePage
    ){}
    ngOnInit(){
        this.query = this.ansServicePage.querys;
    }
};