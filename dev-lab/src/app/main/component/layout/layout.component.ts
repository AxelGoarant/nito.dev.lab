import {afterNextRender, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {Dir} from "@angular/cdk/bidi";
import {isPlatformBrowser, KeyValuePipe} from "@angular/common";
import {Technology, TechnologyList} from "../../model/technology.model";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatToolbar,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly storageName = "technology";

  protected unselectedTechnologyList = TechnologyList;
  protected selectedTechnologyList: Technology[] = [];

  ngOnInit(): void {
    this.loadTechnologySettings();
  }

  addTechnology(value: Technology) {
    this.unselectedTechnologyList = this.unselectedTechnologyList.filter(v => v !== value);
    this.selectedTechnologyList = TechnologyList.filter(v => !this.unselectedTechnologyList.includes(v));
    this.saveTechnologySettings();
  }

  removeTechnology(value: Technology) {
    this.selectedTechnologyList = this.selectedTechnologyList.filter(v => v !== value);
    this.unselectedTechnologyList = TechnologyList.filter(v => !this.selectedTechnologyList.includes(v));
    this.saveTechnologySettings();
  }

  loadTechnologySettings() {
    if (this.isBrowser) {
      const data = localStorage.getItem(this.storageName);
      if (data) {
        this.selectedTechnologyList = JSON.parse(data);
        this.unselectedTechnologyList = TechnologyList.filter(v => !this.selectedTechnologyList.includes(v));
        this.selectedTechnologyList = TechnologyList.filter(v => !this.unselectedTechnologyList.includes(v));
      }
    }
  }

  saveTechnologySettings() {
    if (this.isBrowser) {
      localStorage.setItem(this.storageName, JSON.stringify(this.selectedTechnologyList));
    }
  }


}
