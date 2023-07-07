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

  toggleVideo() {
    let video = document.getElementsByTagName('video')[0];
    if (video.style.display === 'none') {
      video.style.display = 'block';
      return;
    }

    video.style.display = 'none';
  }
}
