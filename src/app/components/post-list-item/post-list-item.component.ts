import { Post } from './../../app.component';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post = {
    id: 0,
    title: '',
    content: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
