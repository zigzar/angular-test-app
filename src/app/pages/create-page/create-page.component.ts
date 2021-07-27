import { PostService } from './../../post.service';
import { Post } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  providers: [PostService]
})
export class CreatePageComponent implements OnInit {

  post: Post = {
    id: 0,
    title: '',
    content: ''
  }

  constructor(private postService: PostService) { 

  }

  ngOnInit(): void {
  }

  addPost(post: Post) {
    post.id = Date.now();
    this.postService.addPost(post);
  }

}
