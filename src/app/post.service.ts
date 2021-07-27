import { Injectable } from '@angular/core';
import { Post } from './app.component';

@Injectable({
    providedIn: 'root'
})
export class PostService{
  
    private posts: Post[] = [
        {id: 1, title: 'title 1', content: 'content 1'},
        {id: 2, title: 'title 2', content: 'content 2'},
        {id: 3, title: 'title 3', content: 'content 3'},
        {id: 4, title: 'title 4', content: 'content 4'},
        {id: 5, title: 'title 5', content: 'content 5'},
    ];
    
    getPost(): Post[] {
          
        return this.posts;
    }
    addPost(post: Post){
          
        this.posts.push(post);
    }
}