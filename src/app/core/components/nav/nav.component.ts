import {AfterViewInit, Component} from '@angular/core';
import {HoverEffectUtil} from "../../utils/HoverEffectUtil";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  pages = [
    "Home",
    "About",
    "Projects",
    "Contact"
  ]

  ngAfterViewInit() {
    for (const page of this.pages) {
      let element = document.getElementById(page);

      if (element) {
        HoverEffectUtil.setHoverEffect(element);
      }
    }
  }
}
