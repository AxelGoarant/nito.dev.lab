import {ArticleMetaData} from "../article/common/article-meta-data.model";
import {Technology} from "../main/model/technology.model";

export const BOOSTRAP_VERSION = "5.3.0"

export function verifyVersion(articles: ArticleMetaData<any>[]) {
  for (let article of articles) {
    const technologyVersion = getVersionByTechnology(article.technology);
    if (article.version !== technologyVersion) {
      console.warn('Article "' + article.name + '" may be outdated.\nCurrent version : ' + article.version + '\nTechnology version : ' + technologyVersion);
    }
  }
}

function getVersionByTechnology(technology: Technology): string {
  switch (technology) {
    case Technology.Bootstrap:
      return BOOSTRAP_VERSION;
    default:
      return "0.0.0";
  }
}
