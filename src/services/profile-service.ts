import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProfileServicePage {
    constructor(private http: HttpClient) {}

    getProfile(email) {
        return this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/users/'+ email);
    }

    updateProfile(email, data) {
        this.http.get<{info: any}>('https://appconfer.herokuapp.com/confer/upprofile/'+email+'/'+
            data.name+'/'+email+'/'+data.password+'/'+data.bio+'/'+data.dept+'/'+data.batch+'/'+data.dob+'/'+data.tags)
        .subscribe(val => {
            console.log(val.info);
        });
    }
}