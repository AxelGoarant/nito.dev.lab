import {afterNextRender, Component, inject, InjectionToken, OnInit, PLATFORM_ID, Signal, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {Dir} from "@angular/cdk/bidi";
import {isPlatformBrowser, KeyValuePipe} from "@angular/common";
import {Technology, TechnologyList} from "../../model/technology.model";
import {SELECTED_TECHNOLOGIES} from "../../../app.config";

@Component({
  selector: 'ndl-technology-bookmarks',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatToolbar,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './technology-bookmarks.component.html',
  styleUrl: './technology-bookmarks.component.css',
})
export class TechnologyBookmarksComponent implements OnInit {
  protected readonly selectedTechnologyList = inject(SELECTED_TECHNOLOGIES);

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly storageName = "technology";

  protected unselectedTechnologyList = TechnologyList;

  ngOnInit(): void {
    this.loadTechnologySettings();
  }

  addTechnology(value: Technology) {
    this.unselectedTechnologyList = this.unselectedTechnologyList.filter(v => v !== value);
    this.selectedTechnologyList.set(TechnologyList.filter(v => !this.unselectedTechnologyList.includes(v)));
    this.saveTechnologySettings();
  }

  removeTechnology(value: Technology) {
    this.selectedTechnologyList.update(list => list.filter(v => v !== value));
    this.unselectedTechnologyList = TechnologyList.filter(v => !this.selectedTechnologyList().includes(v));
    this.saveTechnologySettings();
  }

  loadTechnologySettings() {
    if (this.isBrowser) {
      const data = localStorage.getItem(this.storageName);
      if (data) {
        let temp = JSON.parse(data);
        this.unselectedTechnologyList = TechnologyList.filter(v => !temp.includes(v));
        this.selectedTechnologyList.set(TechnologyList.filter(v => !this.unselectedTechnologyList.includes(v)));
      }
    }
  }

  saveTechnologySettings() {
    if (this.isBrowser) {
      localStorage.setItem(this.storageName, JSON.stringify(this.selectedTechnologyList()));
    }
  }


}
