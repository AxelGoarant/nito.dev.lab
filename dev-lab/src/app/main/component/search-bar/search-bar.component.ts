import {Component, computed, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe} from "@angular/common";
import {Technology} from "../../model/technology.model";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {combineLatestWith, map, Observable, startWith} from "rxjs";
import {RouterLink} from "@angular/router";
import {SELECTED_TECHNOLOGIES_TOKEN} from "../../../app.config";
import {toObservable} from "@angular/core/rxjs-interop";
import {ArticleData} from "../../../article/common/article-data.model";

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
  protected readonly selectedTechnologyList = inject(SELECTED_TECHNOLOGIES_TOKEN).asReadonly();

  stateCtrl = new FormControl('');
  filteredArticles: Observable<ArticleData[]>;

  articles: ArticleData[] = []; // TODO : import all articles data

  constructor() {
    this.filteredArticles =  this.stateCtrl.valueChanges.pipe(
      startWith(''),
      combineLatestWith(toObservable( this.selectedTechnologyList)),
      map(([state, technologies]) => this._filterArticles(state, technologies)),
    );

  }

  private _filterArticles(value: string | null, technologies : Technology[]): ArticleData[] {
    const filterValue = value?.toLowerCase() ?? null;

    let _filteredArticles = this.articles;
    _filteredArticles = this._filterByTechnologies(_filteredArticles, technologies);
    if (filterValue && filterValue !== '') {
      _filteredArticles = this._filterByKeywords(_filteredArticles, filterValue);
      _filteredArticles = this._sortByPertinence(_filteredArticles, filterValue);
    }
    _filteredArticles = this._limitResultsSize(_filteredArticles);
    return _filteredArticles;
  }

  private _filterByKeywords(articles: ArticleData [], value: string): ArticleData[] {
    return articles.filter(article => article.keywords?.find(keyword => keyword.toLowerCase().includes(value)));
  }

  private _filterByTechnologies(articles: ArticleData [], technologies: Technology[]): ArticleData[] {
    return articles.filter(article => technologies.find(technology => technology === article.technology));
  }

  private _sortByPertinence(articles: ArticleData [], value: string): ArticleData[] {
    return articles;
  }

  private _limitResultsSize(articles: ArticleData []): ArticleData[] {
    return articles.slice(0, 5);
  }
}
