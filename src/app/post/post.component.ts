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
  @Input() loveIts: number;  
  @Input() created_at: Date;
  @Input() bgColor: string;

   

  constructor(private postService: PostService) { 
   
  }

  ngOnInit(): void {
  }

  onLove(index: number) {
    this.loveIts += 1;
    this.bgColor = 'green';
    console.log('index = '+index);
    this.postService.updatePost(index, this.loveIts, this.bgColor);
    
  }

  onDontLove(index: number) {
    this.loveIts -= 1;
    this.bgColor = 'red';
    this.postService.updatePost(index, this.loveIts, this.bgColor);
  }

  onSuppressPost(post: Post){
    this.postService.removePost(post);
  }

}
