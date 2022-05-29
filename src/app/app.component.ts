import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redditclone';

  add_article(title:HTMLInputElement, link:HTMLInputElement){
    console.log(title.value);
    console.log(link.value);
  }
}
