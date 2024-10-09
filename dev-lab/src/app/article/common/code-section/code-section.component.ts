import {Component, inject, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTabContent} from "@angular/material/tabs";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'ndl-code-section',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        MatTabContent
    ],
  templateUrl: './code-section.component.html',
  styleUrl: './code-section.component.css'
})
export class CodeSectionComponent {
  private readonly clipboard = inject(Clipboard);

  @Input({required:true}) code ?: string;

  copyToClipboard(code?: string) {
    if(code){
      this.clipboard.copy(code);
    }
  }
}
