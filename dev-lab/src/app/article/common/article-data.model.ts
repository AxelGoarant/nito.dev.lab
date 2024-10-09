import {Technology} from "../../main/model/technology.model";

export interface ArticleData {
  technology?: Technology;
  name: string;
  keywords?: string[];
  url: string[];
}
