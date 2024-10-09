import {Technology} from "../../main/model/technology.model";
import {ComponentType} from "@angular/cdk/portal";

export interface ArticleMetaData<T> {
    component: ComponentType<T>;
    name: string;
    technology: Technology;
    keywords: string[];
    url: string[];
}
