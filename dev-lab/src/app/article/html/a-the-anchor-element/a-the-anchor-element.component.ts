import { Component } from '@angular/core';
import {ArticleComponent} from "../../common/article/article.component";
import {CodePlaygroundComponent} from "../../common/code-playground/code-playground.component";

@Component({
  selector: 'a-the-anchor-element',
  standalone: true,
  imports: [
    ArticleComponent,
    CodePlaygroundComponent
  ],
  templateUrl: './a-the-anchor-element.component.html',
  styleUrl: './a-the-anchor-element.component.css'
})
export class ATheAnchorElementComponent {
  htmlCode = "<p>You can reach Michael at:</p>\n" +
    "\n" +
    "<ul>\n" +
    "  <li><a href=\"https://example.com\">Website</a></li>\n" +
    "  <li><a href=\"mailto:m.bluth@example.com\">Email</a></li>\n" +
    "  <li><a href=\"tel:+123456789\">Phone</a></li>\n" +
    "</ul>";
  cssCode = "li {\n" +
    "  margin-bottom: 0.5rem;\n" +
    "}";
}
