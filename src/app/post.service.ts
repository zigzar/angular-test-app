import { Injectable } from '@angular/core';
import { Post } from './app.component';

@Injectable()
export class PostService{
    posts: Post[] = []

    fetchPosts() {
        let storagePosts = localStorage.getItem('posts');
        if (storagePosts) this.posts = JSON.parse(storagePosts);
    }

    addPost(post: Post){
        this.fetchPosts();
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts))
    }

    getPost(id: number) {
        this.fetchPosts();
        return this.posts.find(item => item.id == id)
    }
}