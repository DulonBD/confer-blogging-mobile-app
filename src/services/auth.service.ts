import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class User {
  name: string;
  email: string;
  bio: string;
  dept: string;
  batch: string;
  dob: string
  tags;
  posts;
  answers;

  constructor(name: string, email: string, bio: string, dept: string, batch: string, dob: string, tags, posts, answers) {
    this.name = name;
    this.email = email;
    this.bio = bio;
    this.dept = dept;
    this.batch = batch;
    this.dob = dob;
    this.tags = tags;
    this.posts = posts;
    this.answers = answers;
  }
}
@Injectable()
export class AuthServiceProvider {
  currentUser: User = null;

  constructor(public http: HttpClient, public storage: Storage) {}

  setUser(email) {
    // this.currentUser = new User(name, email, bio, dept, batch, dob, tags, posts, answers);
    this.http.get<{response: any}>('https://appconfer.herokuapp.com/confer/users/'+ email)
    .subscribe(res => {
      this.currentUser = new User (
        res.response.name,
        res.response.email,
        res.response.bio,
        res.response.dept,
        res.response.batch,
        res.response.dob,
        res.response.tags,
        res.response.posts,
        res.response.answers
      );
    },
    error => {
      console.log(error);
    });
  }

  getUserInfo() : User {
    return this.currentUser;
  }

  logout() {
    this.storage.set('email', null);
  }
}