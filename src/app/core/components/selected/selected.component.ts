import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements AfterViewInit{
  current_page = "home";

  ngAfterViewInit() {
    window.addEventListener("hashchange", () => {
      this.current_page = window.location.hash.slice(1).toLowerCase();
    });
  }
}
