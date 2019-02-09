import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AnswerQueryPage } from "./answer-query/answerquery";

@Component({
    selector: 'page-answer',
    templateUrl: 'answer.html'
})
export class AnswerPage{
    ansQueryPage = AnswerQueryPage;
    constructor(
        public navCtrl: NavController
    ){}
    goToAnsQuery(){
        this.navCtrl.push(AnswerQueryPage);
    }
}