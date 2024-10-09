import { Component } from '@angular/core';
import {ArticleComponent} from "../../../common/article/article.component";
import {CodePlaygroundComponent} from "../../../common/code-playground/code-playground.component";
import {CodeSectionComponent} from "../../../common/code-section/code-section.component";

@Component({
  selector: 'app-Containers',
  standalone: true,
  imports: [
    ArticleComponent,
    CodePlaygroundComponent,
    CodeSectionComponent
  ],
  templateUrl: './layout-containers-article.html',
  styleUrl: './layout-containers-article.css'
})
export class LayoutContainersArticle {
  code001 = "<div class=\"container\">\n" +
    "  <!-- Content here -->\n" +
    "</div>";

  code002 = "<div class=\"container-sm\">100% wide until small breakpoint</div>\n" +
    "<div class=\"container-md\">100% wide until medium breakpoint</div>\n" +
    "<div class=\"container-lg\">100% wide until large breakpoint</div>\n" +
    "<div class=\"container-xl\">100% wide until extra large breakpoint</div>\n" +
    "<div class=\"container-xxl\">100% wide until extra extra large breakpoint</div>";

code003 = "<div class=\"container-fluid\">\n" +
  "  ...\n" +
  "</div>";
}
