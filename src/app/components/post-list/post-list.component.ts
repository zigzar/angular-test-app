import { Post } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  
  posts: Post[] = [
    {title: 'title 1', content: 'content 1'},
    {title: 'title 2', content: 'content 2'},
    {title: 'title 3', content: 'content 3'},
    {title: 'title 4', content: 'content 4'},
    {title: 'title 5', content: 'content 5'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
