import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QueryServicePage{
    constructor(private http: HttpClient) {}
    
    getQuestions() {
        return this.http.get<{response: any}>('http://localhost:3000/confer/questions/');
    }

    addQuestion(title, detail, tags, user) {
        const qus = { title: title, detail: detail, tags: tags, user: user};

        return this.http.post<{status: boolean}>('http://localhost:3000/confer/question/', qus);
    }
}