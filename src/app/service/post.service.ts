import { Injectable } from '@angular/core';
import  firebase from 'firebase';
import { Subject } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<Post[]>();

  posts: Post[] = [
    {
      title: 'Mon premier post',  
      content: 'blablablablablablablablablablablablabla',  
      loveIts: '',  
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',  
      content: 'bliblibliblibliblibliblibli',  
      loveIts: '',  
      created_at: new Date()
    },
    {
      title: 'Encore un post',  
      content: 'bleblebleblebleblebleblebleblebleble',  
      loveIts: '',  
      created_at: new Date()
    },
  ];
  

  constructor() {
    this.emitPosts();
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

  createNewBook(post: Post){
    this.posts.push(post);
    this.savePost();
    this.emitPosts();
  }

}
