import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

export class User {
    fullName:string;
    email:string;
    pass: number;
    id: number;
    
    constructor(fullName:string, email:string, password: number, id: number) {
        this.fullName = fullName;
        this.pass = password;
        this.id = id;
        this.email = email;
    }
}

@Injectable()
export class SignUpServicePage {
    currentUser: User;

    constructor(private http: HttpClient) {}

    public onSignUp(credentials) {
        if ( credentials.fullName === null ||
            credentials.email === null || 
            credentials.password === null) {
          return Observable.throw("Please insert credentials");

        } else {
            const user = {
                name: credentials.fullName, 
                email: credentials.email, 
                password: credentials.password
            };
          
            this.http.post<{status: string}>('https://appconfer.herokuapp.com/confer/users/', user)
            .subscribe((res) => {
                if(res.status) {
                    return Observable.create(observer => {
                        observer.next(true);
                        observer.complete();
                    });
                }
            });
        }
    }
    
    public getUserInfo() : User {
        return this.currentUser;
    }
}