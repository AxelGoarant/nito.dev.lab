import {Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe} from "@angular/common";
import {Technology} from "../../model/technology.model";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {combineLatestWith, map, Observable, startWith} from "rxjs";
import {RouterLink} from "@angular/router";
import {SELECTED_TECHNOLOGIES} from "../../../app.config";
import {toObservable} from "@angular/core/rxjs-interop";
import {ArticleMetaData} from "../../../article/common/article-meta-data.model";
import {ALL_ARTICLES} from "../../../article/article-index";

@Component({
  selector: 'ndl-search-bar',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
    MatLabel,
    MatIcon,
    RouterLink
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  protected readonly selectedTechnologyList = inject(SELECTED_TECHNOLOGIES).asReadonly();

  stateCtrl = new FormControl('');
  filteredArticles: Observable<ArticleMetaData<any>[]>;

  constructor() {
    this.filteredArticles = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      combineLatestWith(toObservable(this.selectedTechnologyList)),
      map(([state, technologies]) => this._filterArticles(state, technologies)),
    );

  }

  private _filterArticles(value: string | null, technologies: Technology[]): ArticleMetaData<any>[] {
    const filterValue = value?.toLowerCase() ?? null;

    let _filteredArticles = ALL_ARTICLES;
    _filteredArticles = this._filterByTechnologies(_filteredArticles, technologies);
    if (filterValue && filterValue !== '') {
      _filteredArticles = this._filterByKeywords(_filteredArticles, filterValue);
      _filteredArticles = this._sortByPertinence(_filteredArticles, filterValue);
    }
    _filteredArticles = this._limitResultsSize(_filteredArticles);
    return _filteredArticles;
  }

  private _filterByKeywords(articles: ArticleMetaData<any> [], value: string): ArticleMetaData<any>[] {
    return articles.filter(article => article.keywords?.find(keyword => keyword.toLowerCase().includes(value)));
  }

  private _filterByTechnologies(articles: ArticleMetaData<any> [], technologies: Technology[]): ArticleMetaData<any>[] {
    return articles.filter(article => technologies.find(technology => technology === article.technology));
  }

  private _sortByPertinence(articles: ArticleMetaData<any> [], value: string): ArticleMetaData<any>[] {
    return articles;
  }

  private _limitResultsSize(articles: ArticleMetaData<any> []): ArticleMetaData<any>[] {
    return articles.slice(0, 5);
  }
}
