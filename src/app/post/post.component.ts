import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Post[] = [];
  postService;

  constructor() {

   this.postService = new PostService();
   this.posts = this.postService.getPosts();

   }

  ngOnInit(): void {
    //
  }

  getPosts() {

    this.posts = this.postService.getPosts();
    console.log(this.posts);

  }



}
