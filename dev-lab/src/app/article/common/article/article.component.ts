import {Component, Input} from '@angular/core';
import {CodePlaygroundComponent} from "../code-playground/code-playground.component";

@Component({
  selector: 'ndl-article',
  standalone: true,
  imports: [
    CodePlaygroundComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input({required:true}) title?: string;
}
