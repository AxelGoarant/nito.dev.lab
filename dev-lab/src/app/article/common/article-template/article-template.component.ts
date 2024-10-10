import {Component, Input} from '@angular/core';
import {CodePlaygroundComponent} from "../code-playground/code-playground.component";

@Component({
  selector: 'ndl-article-template',
  standalone: true,
  imports: [
    CodePlaygroundComponent
  ],
  templateUrl: './article-template.component.html',
  styleUrl: './article-template.component.css'
})
export class ArticleTemplateComponent {
  @Input({required:true}) title?: string;
}
