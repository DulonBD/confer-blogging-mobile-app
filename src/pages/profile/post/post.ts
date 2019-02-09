import { Component, OnInit } from "@angular/core";
import { PostServicePage } from "../../../services/post-service";

@Component({
    selector: 'page-post',
    templateUrl:'post.html'
})
export class PostPage implements OnInit{
    posts;
    constructor(
        private postService:PostServicePage
    ){}

    ngOnInit() {
        this.posts = this.postService.posts;
    }
}