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
  }

  public toggleSizer() {
    let content = document.getElementById('content');
    let nav = document.getElementById('nav');
    let selected = document.getElementById('selected');
    let divider = document.getElementById('divider');

    if (this.sizer_state === 'expand') {
      this.sizer_state = 'compress';

      if (content) {
        this.oldWidth = content.style.width ? parseInt(content.style.width) : content.clientWidth;
        this.oldHeight = content.style.height ? parseInt(content.style.height) : content.clientHeight;

        content.style.width = '100%';
        content.style.height = '100%';

        if (nav && selected && divider) {
          nav.style.transform = 'translateY(-100px)';
          selected.style.transform = 'translateY(0px)';
          divider.style.transform = 'translateY(0px)';
          divider.style.left = '0';
        }
      }
    } else {
      this.sizer_state = 'expand';

      if (content) {
        content.style.width = this.oldWidth + 'px';
        content.style.height = this.oldHeight + 'px';

        if (nav && selected && divider) {
          nav.style.transform = 'translateY(0px)';
          selected.style.transform = 'translateY(-100px)';
          divider.style.transform = 'translateY(-100px)';
        }
      }
    }
  }
}
