import {AfterViewInit, Component} from '@angular/core';
import {HoverEffectUtil} from "../../utils/HoverEffectUtil";

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements AfterViewInit {
  sizer_state: 'expand' | 'compress' = 'expand';
  oldWidth = 0;
  oldHeight = 0;

  ngAfterViewInit() {
    let sizer = document.getElementById('sizer');

    if (sizer) {
      HoverEffectUtil.setHoverEffect(sizer, 25, 25);
    }

    // check if the user is on a mobile device, if yes trigger the sizer
    if (window.innerWidth <= 768) {
      this.toggleSizer();
    }
  }

  public toggleSizer() {
    let content = document.getElementById('content');
    let nav = document.getElementById('nav');
    let selected = document.getElementById('selected');
    let gudBadge = document.getElementById('gud-badge');

    if (this.sizer_state === 'expand') {
      this.sizer_state = 'compress';
      gudBadge?.classList.add('disappear');

      if (content) {
        this.oldWidth = content.style.width ? parseInt(content.style.width) : content.clientWidth;
        this.oldHeight = content.style.height ? parseInt(content.style.height) : content.clientHeight;

        content.style.width = '100%';
        content.style.height = '100%';

        if (nav && selected) {
          nav.style.transform = 'translateY(-100px)';
          selected.style.transform = 'translateY(0px)';
        }
      }
    } else {
      this.sizer_state = 'expand';
      gudBadge?.classList.remove('disappear');

      if (content) {
        content.style.width = this.oldWidth + 'px';
        content.style.height = this.oldHeight + 'px';

        if (nav && selected) {
          nav.style.transform = 'translateY(0px)';
          selected.style.transform = 'translateY(-100px)';
        }
      }
    }
  }
}
