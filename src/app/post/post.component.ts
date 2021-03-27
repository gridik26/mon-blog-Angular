import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;  
  @Input() content: string;  
  @Input() loveIts: string;  
  @Input() created_at: Date;
   

  constructor(private postService: PostService) { 
  }

  ngOnInit(): void {
  }

  onLove() {
    this.loveIts = 'love';
  }

  onDontLove() {
    this.loveIts = 'hate';
  }

  onSuppressPost(post: Post){
    this.postService.removePost(post);
  }

}
