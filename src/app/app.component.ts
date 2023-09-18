import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SvgBackgroundUtils} from "./core/utils/SvgBackgroundUtils";
import {defaultAudioVolume, pages} from "./core/utils/Consts";
import {AudioPlayer} from "./core/utils/AudioPlayer";
import {EnlargeImageUtils} from "./core/utils/EnlargeImageUtils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  pages: HTMLElement[] = []

  ngOnInit() {
    AudioPlayer.init();
    AudioPlayer.changeVolume(defaultAudioVolume / 100);
  }

  async ngAfterViewInit() {
    window.addEventListener("hashchange", () => {
      this.changeSection();
    });

    for (const page of pages) {
      let pageElemenent = document.getElementById("Sec" + page)

      if (pageElemenent) {
        this.pages.push(pageElemenent);
      }
    }

    this.changeSection();
    SvgBackgroundUtils.init();
  }

  public changeSection() {
    const hash = window.location.hash.substr(1);
    this.triggerSection(hash);
  }

  private triggerSection(section: string) {
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

  public closeEnlargedImage() {
    EnlargeImageUtils.closeEnlargedImage();
  }
}
