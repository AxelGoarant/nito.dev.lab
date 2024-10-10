import {Technology} from "../../main/model/technology.model";

export abstract class ArticleMetaData {
  abstract technology?: Technology;
  abstract keywords?: string[];
  abstract url: string[];
}
