import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class User {
    userName:string;
    pass: number;
    id: number;
    
    constructor(userName:string, name: number, id: number) {
        this.userName = userName;
        this.pass = name;
        this.id = id;
    }
}

@Injectable()
export class SignInServicePage {
    currentUser: User;

    public onSignIn(acceptance) {
            if( acceptance.userName === null || acceptance.id === null || acceptance.password === null){
                return Observable.throw('Please insert Acceptance');
            }
            else{
                return Observable.create(observer =>{
                    let access =( acceptance.userName === "userName" && acceptance.id ==="id" && acceptance.password ==="pass");
                    this.currentUser = new User('Dulon007', 1512020213, 12345678);
                    observer.next(access);
                    observer.complete();
                });
            }
    }

    getUserInfo() : User {
        return this.currentUser;
    }
     
    logout() {
        return Observable.create(observer => {
        this.currentUser = null;
        observer.next(true);
        observer.complete();
        });
    }
}
