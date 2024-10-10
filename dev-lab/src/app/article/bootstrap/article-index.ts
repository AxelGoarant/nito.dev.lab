import {retrieveArticleDataFromWithTechnology} from "../common/article-utils";
import {BootStrapLayoutArticles} from "./Layout/article-index";
import {Technology} from "../../main/model/technology.model";
import {Article} from "../common/article-meta-data.model";

export const BootstrapArticles = retrieveArticleDataFromWithTechnology(new Array<Article>().concat(BootStrapLayoutArticles), Technology.Bootstrap);
