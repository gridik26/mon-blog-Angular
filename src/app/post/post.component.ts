import { Component, Input, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string;  
  @Input() content: string;  
  @Input() loveIts: string;  
  @Input() created_at: Date;
   

  constructor() { 
  }

  ngOnInit(): void {
  }

  onLove() {
    this.loveIts = 'love';
  }

  onDontLove() {
    this.loveIts = 'hate';
  }

}
