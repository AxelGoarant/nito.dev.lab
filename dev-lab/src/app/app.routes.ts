import {Routes} from '@angular/router';

import {ATheAnchorElementComponent} from "./article/html/a-the-anchor-element/a-the-anchor-element.component";
import {SampleArticleHtmlComponent} from "./article/html/sample-article-html/sample-article-html.component";
import {SampleArticleCssComponent} from "./article/css/sample-article-css/sample-article-css.component";
import {
  SampleArticleJavascriptComponent
} from "./article/javascript/sample-article-javascript/sample-article-javascript.component";
import {
  SampleArticleTypescriptComponent
} from "./article/typescript/sample-article-typescript/sample-article-typescript.component";
import {
  LayoutContainersArticle
} from "./article/bootstrap/Layout/Containers/bootstrap-layout-containers-article";
import {SampleArticleAngularComponent} from "./article/angular/sample-article-angular/sample-article-angular.component";
import {SampleArticleRxjsComponent} from "./article/rxjs/sample-article-rxjs/sample-article-rxjs.component";
import {AllArticles} from "./article/article-index";

export const routes: Routes = AllArticles.map(article => {
  return {
    path: article.url.join(), component: article.component
  }
});
