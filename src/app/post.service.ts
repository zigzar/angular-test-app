import { Injectable } from '@angular/core';
import { Post } from './app.component';

@Injectable()
export class PostService{
    posts: Post[] = []

    addPost(post: Post){
        let storagePosts = localStorage.getItem('posts');
        if (storagePosts) this.posts = JSON.parse(storagePosts);
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts))
    }
}