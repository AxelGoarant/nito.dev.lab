import {Component, ViewChild, ElementRef, AfterViewInit, OnChanges, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTab, MatTabBody, MatTabContent, MatTabGroup} from "@angular/material/tabs";
import {CodeSectionComponent} from "./code-section/code-section.component";

@Component({
  selector: 'ndl-code-playground',
  templateUrl: './code-playground.component.html',
  standalone: true,
  imports: [
    NgIf,
    MatIcon,
    MatIconButton,
    MatTabGroup,
    MatTab,
    MatTabBody,
    MatTabContent,
    CodeSectionComponent
  ],
  styleUrls: ['./code-playground.component.css']
})
export class CodePlaygroundComponent implements AfterViewInit, OnChanges {
  @Input({required : true}) htmlCode ?: string;
  @Input() cssCode ?: string;
  @Input() jsCode ?: string;

  @ViewChild('iframePreview') iframePreview!: ElementRef<HTMLIFrameElement>;

  ngAfterViewInit() {
    this.updateIframeContent();
  }

  ngOnChanges() {
    this.updateIframeContent();
  }

  updateIframeContent() {
    if (this.iframePreview) {
      const iframe = this.iframePreview.nativeElement;
      const document = iframe.contentDocument || iframe.contentWindow?.document;

      if (document) {
        const content = `
          <html>
            <head>
              <style>${this.cssCode}</style>
            </head>
            <body>
              ${this.htmlCode}
              <script>${this.jsCode}<\/script>
            </body>
          </html>
        `;
        document.open();
        document.write(content);
        document.close();
      }
    }
  }
}
