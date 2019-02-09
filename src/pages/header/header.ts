import { Component } from "@angular/core";
import { SearchPage } from "../search/search";

@Component({
    selector: 'page-header',
    templateUrl:'header.html'
})
export class HeaderPage {
    searchPage = SearchPage;
    constructor(){}
}