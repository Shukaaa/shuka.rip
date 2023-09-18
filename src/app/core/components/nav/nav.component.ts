import {AfterViewInit, Component} from '@angular/core';
import {HoverEffectUtil} from "../../utils/HoverEffectUtil";
import {pages} from "../../utils/Consts";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  pages = pages;

  ngAfterViewInit() {
    for (const page of this.pages) {
      let element = document.getElementById(page);

      if (element) {
        HoverEffectUtil.setHoverEffect(element);
      }
    }
  }

  changePage(page: string) {
    window.location.hash = page;
  }
}
