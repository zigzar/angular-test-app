import { PostService } from './../../post.service';
import { Post } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }

}
