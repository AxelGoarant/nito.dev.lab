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
  SampleArticleBootstrapComponent
} from "./article/bootstrap/sample-article-bootstrap/sample-article-bootstrap.component";
import {SampleArticleAngularComponent} from "./article/angular/sample-article-angular/sample-article-angular.component";
import {SampleArticleRxjsComponent} from "./article/rxjs/sample-article-rxjs/sample-article-rxjs.component";

export const routes: Routes = [
  {path: 'SampleArticleHtmlComponent', component: SampleArticleHtmlComponent},
  {path: 'SampleArticleCssComponent', component: SampleArticleCssComponent},
  {path: 'SampleArticleJavascriptComponent', component: SampleArticleJavascriptComponent},
  {path: 'SampleArticleTypescriptComponent', component: SampleArticleTypescriptComponent},
  {path: 'SampleArticleBootstrapComponent', component: SampleArticleBootstrapComponent},
  {path: 'SampleArticleAngularComponent', component: SampleArticleAngularComponent},
  {path: 'SampleArticleRxjsComponent', component: SampleArticleRxjsComponent},
  {path: 'ATheAnchorElementComponent', component: ATheAnchorElementComponent},
];
