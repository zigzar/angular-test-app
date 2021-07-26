import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  post = {
    title:'',
    content:'',
  };



  constructor() { 

  }

  ngOnInit(): void {
  }

}
