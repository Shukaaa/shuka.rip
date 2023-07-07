import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SvgBackgroundUtils} from "./core/utils/SvgBackgroundUtils";
import {defaultAudioVolume, pages} from "./core/utils/Consts";
import {AudioPlayer} from "./core/utils/AudioPlayer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  pages: HTMLElement[] = []
  hash: string = "";
  initialPageIsLoaded: boolean = false;

  ngOnInit() {
    this.hash = window.location.hash.replace('#', '') || pages[0];
    AudioPlayer.init();
    AudioPlayer.changeVolume(defaultAudioVolume / 100);
  }

  async ngAfterViewInit() {
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
