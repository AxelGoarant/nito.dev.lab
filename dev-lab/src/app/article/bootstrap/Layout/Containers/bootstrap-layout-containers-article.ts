import {Component} from '@angular/core';
import {ArticleTemplateComponent} from "../../../common/article-template/article-template.component";
import {CodePlaygroundComponent} from "../../../common/code-playground/code-playground.component";
import {CodeSectionComponent} from "../../../common/code-section/code-section.component";
import {Article} from "../../../common/article";
import {ArticleMetaData} from "../../../common/article-meta-data.model";

@Component({
  selector: 'app-Containers',
  standalone: true,
  imports: [
    ArticleTemplateComponent,
    CodePlaygroundComponent,
    CodeSectionComponent
  ],
  templateUrl: './bootstrap-layout-containers-article.html',
  styleUrl: './bootstrap-layout-containers-article.css'
})
export class BootstrapLayoutContainersArticle implements ArticleMetaData {
  title = 'Layout : Containers';
  url = ['containers'];

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
