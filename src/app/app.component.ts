import {AfterViewInit, Component} from '@angular/core';
import {SvgBackgroundUtils} from "./core/utils/SvgBackgroundUtils";
import {pages} from "./core/utils/Consts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  pages: HTMLElement[] = []

  ngAfterViewInit() {
    window.addEventListener('hashchange', () => {
      this.triggerSection(window.location.hash.replace('#', ''));
    });

    for (const page of pages) {
      let pageElemenent = document.getElementById("Sec" + page)

      if (pageElemenent) {
        this.pages.push(pageElemenent);
      }
    }

    SvgBackgroundUtils.init();
  }

  triggerSection(section: string) {
    const element = document.getElementById("Sec" + section);

    if (element) {
      for (const page of this.pages) {
        if (page.id === "Sec" + section) {
          page.style.display = 'block';
          continue;
        }

        page.style.display = 'none';
      }
    }
  }
}
