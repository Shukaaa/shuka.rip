import {AfterViewInit, Component} from '@angular/core';
import {SvgBackgroundUtils} from "./core/utils/SvgBackgroundUtils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    SvgBackgroundUtils.init();


  }
}
