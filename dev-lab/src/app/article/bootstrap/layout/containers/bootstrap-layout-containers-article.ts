import {Component} from '@angular/core';
import {ArticleComponent} from "../../../common/article/article.component";
import {CodePlaygroundComponent} from "../../../common/code-playground/code-playground.component";
import {CodeSectionComponent} from "../../../common/code-section/code-section.component";
import {ArticleMetaData} from "../../../common/article-meta-data.model";
import {Technology} from "../../../../main/model/technology.model";

const title = 'Layout : Containers';

@Component({
    selector: 'app-containers',
    standalone: true,
    imports: [
        ArticleComponent,
        CodePlaygroundComponent,
        CodeSectionComponent,
    ],
    templateUrl: './bootstrap-layout-containers-article.html',
    styleUrl: './bootstrap-layout-containers-article.css',
})
export class BootstrapLayoutContainersArticle {
    title = title;

    code001 = "<div class=\"container\">\n" +
        "  <!-- Content here -->\n" +
        "</div>";

    code002 = "<div class=\"container-sm\">100% wide until small breakpoint</div>\n" +
        "<div class=\"container-md\">100% wide until medium breakpoint</div>\n" +
        "<div class=\"container-lg\">100% wide until large breakpoint</div>\n" +
        "<div class=\"container-xl\">100% wide until extra large breakpoint</div>\n" +
        "<div class=\"container-xxl\">100% wide until extra extra large breakpoint</div>";

    code003 = "<div class=\"container-fluid\">\n" +
        "  ...\n" +
        "</div>";
}

export const BOOTSTRAP_LAYOUT_CONTAINERS_ARTICLE: ArticleMetaData<any> = {
    component: BootstrapLayoutContainersArticle,
    name: title,
    keywords: [Technology.Bootstrap, "layout", "containers"],
    technology: Technology.Bootstrap,
    url: [Technology.Bootstrap, "layout", "containers"]
};
