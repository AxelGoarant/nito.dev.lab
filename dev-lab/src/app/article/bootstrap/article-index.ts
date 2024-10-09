import {retrieveArticleDataFromWithTechnology} from "../common/article-utils";
import {Layout} from "./Layout/article-index";
import {Technology} from "../../main/model/technology.model";

export const Bootstrap = retrieveArticleDataFromWithTechnology([
  Layout
], Technology.Bootstrap);
