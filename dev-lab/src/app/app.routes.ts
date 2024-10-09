import {Routes} from '@angular/router';
import {ALL_ARTICLES} from "./article/article-index";

export const routes: Routes = ALL_ARTICLES.map(article => {
  return {
    path: article.url.join("/"), component: article.component
  }
});
