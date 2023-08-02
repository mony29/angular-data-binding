import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title : string = 'Spring';
  author : string = 'Mony';
  
  newTitle : string = '';

  updateTitle(event: any) : void{
    // console.log(event);
    this.title = this.newTitle;
    console.log(this.title)
  }
}
