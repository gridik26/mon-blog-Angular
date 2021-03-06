import { Injectable } from '@angular/core';
import  firebase from 'firebase';
import { Subject } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<Post[]>();

  posts: Post[] = [];
  

  constructor() {
    this.emitPosts();
    this.getPosts();
   }

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  savePost(){
    firebase.database().ref('posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createPost(post: Post){
    this.posts.push(post);
    this.savePost();
    this.emitPosts();
  }


  removePost(post: Post){
    console.log('remove de remove');
    const postToRemove = this.posts.findIndex(
      (postTosuppress) => {
        if(postTosuppress === post) {
          return true;
        }
      }
    );
    this.posts.splice(postToRemove, 1);
    this.savePost();
    this.emitPosts();
  }

  updatePost(index: number, loveIts: number, bgColor: string){
    firebase.database().ref('posts/').child(index.toString()).update({'loveIts': loveIts,'bgColor': bgColor});
    
  }

}
