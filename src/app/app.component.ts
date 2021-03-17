import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-blog';

  posts = [
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

}
