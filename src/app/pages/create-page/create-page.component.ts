import { ActivatedRoute, Router } from '@angular/router';
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

  id: number;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute, private router: Router) { 
    this.id = activateRoute.snapshot.params['id'];
    if (this.id) { // Если в параметрах запроса указан id
      let post = this.postService.getPost(this.id);
      post ? this.post = post : this.router.navigate(['']); // Если пост с таким id не существует, то выполнить редирект на главную страницу
    } 
  }

  ngOnInit(): void {
  }

  addPost(post: Post) {
    post.id = Date.now();
    this.postService.addPost(post);
  }

  updatePost(post: Post) {

  }

}
