import {Technology} from "../../main/model/technology.model";
import {Article} from "./article-meta-data.model";
import {ComponentType} from "@angular/cdk/portal";

export function retrieveArticleDataFromWithGroup(articleList: (ComponentType<any> extends )[], group: string): Article[] {
  for (let article of articleList) {
    article.url.unshift(group)
  }
  return articleList.slice();
}

export function retrieveArticleDataFromWithTechnology(articleList: Article[], technology: Technology): Article[] {
  for (let article of articleList) {
    article.url.unshift(technology)
    article.technology = technology;
  }
  return articleList.slice();
}

