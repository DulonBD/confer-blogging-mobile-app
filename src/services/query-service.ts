import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QueryServicePage{
    constructor(private http: HttpClient) {}
    
    getQuestions() {
        return this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/questions/');
    }

    getQuestionDts(id) {
        return this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/question/'+id);
    }

    addQuestion(title, detail, tags, user) {
        const qus = { title: title, detail: detail, tags: tags, user: user};

        return this.http.post<{status: boolean}>('https://appconfer.herokuapp.com/confer/question/', qus);
    }
}