import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-blog';

  constructor() {

    var firebaseConfig = {
      apiKey: "AIzaSyC5MbiIRvxkNQmgM8_OmM3gIg8gg0gPZrw",
      authDomain: "mon-blog-14441.firebaseapp.com",
      databaseURL: "https://mon-blog-14441-default-rtdb.firebaseio.com",
      projectId: "mon-blog-14441",
      storageBucket: "mon-blog-14441.appspot.com",
      messagingSenderId: "146325080614",
      appId: "1:146325080614:web:e16ef3399f683e0595b4e7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
