import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SearchServicePage {
    constructor(private http: HttpClient) {}
    
    searchQus(key) {
        return this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/searchqs/'+key);
    }

    searchPro(key) {
        return this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/searchpro/'+key);
    }
}