import {Component} from '@angular/core';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  showMd(event: any) {
    event.target.innerText = 'Magdeburg (jk i hate this city)';
  }

  hideMd(event: any) {
    event.target.innerText = 'Magdeburg';
  }
}
