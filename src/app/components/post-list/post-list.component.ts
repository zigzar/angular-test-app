import { Post } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  
  posts: Post[] = [];
  constructor() {

  }

  ngOnInit(): void {
    let storagePosts = localStorage.getItem('posts');
    if (storagePosts) this.posts = JSON.parse(storagePosts);
  }

}
