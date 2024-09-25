import {Component, inject} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {LayoutComponent} from "./main/component/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer = inject(DomSanitizer);

  constructor() {
    this.matIconRegistry
      .addSvgIcon('html', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/HTML5.svg'))
      .addSvgIcon('css', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/CSS3.svg'))
      .addSvgIcon('javascript', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/JavaScript.svg'))
      .addSvgIcon('typescript', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/TypeScript.svg'))
      .addSvgIcon('bootstrap', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/bootstrap.svg'))
      .addSvgIcon('angular', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/Angular.svg'))
      .addSvgIcon('rxjs', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/rxjs.svg'))
      .addSvgIcon('bookmark_remove', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/bookmark_remove.svg'));
  }
}
