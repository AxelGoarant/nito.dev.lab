import {BootstrapArticles} from "./bootstrap/article-index";
import {Article} from "./common/article-meta-data.model";

export const AllArticles = new Array<Article>().concat(BootstrapArticles);
