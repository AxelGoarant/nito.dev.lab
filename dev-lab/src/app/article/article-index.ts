import {ArticleMetaData} from "./common/article-meta-data.model";
import {BOOTSTRAP_ARTICLES} from "./bootstrap/article-index";

export const ALL_ARTICLES: ArticleMetaData<any>[] = new Array<ArticleMetaData<any>>().concat(
  BOOTSTRAP_ARTICLES
);
