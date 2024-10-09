import {ArticleData} from "./article-data.model";
import {Technology} from "../../main/model/technology.model";

export function retrieveArticleDataFromWithGroup(articleData: ArticleData[], group: string): ArticleData[] {
  let result: ArticleData[] = [];
  for (let article of articleData) {
    article.url.push(group)
  }
  return result;
}

export function retrieveArticleDataFromWithTechnology(articleData: ArticleData[], technology: Technology): ArticleData[] {
  let result: ArticleData[] = [];
  for (let article of articleData) {
    article.url.push(technology)
    article.technology = technology;
  }
  return result;
}
