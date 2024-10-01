import {afterNextRender, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {Dir} from "@angular/cdk/bidi";
import {isPlatformBrowser, KeyValuePipe} from "@angular/common";
import {Technology, TechnologyList} from "../../model/technology.model";
import {TechnologyBookmarksComponent} from "../technology-bookmarks/technology-bookmarks.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [
        MatIconButton,
        MatIcon,
        MatToolbar,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        TechnologyBookmarksComponent,
        SearchBarComponent,
        RouterOutlet
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
