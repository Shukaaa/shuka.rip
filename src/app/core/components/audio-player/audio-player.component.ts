import {Component} from '@angular/core';
import {AudioPlayer} from "../../utils/AudioPlayer";
import {defaultAudioVolume} from "../../utils/Consts";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  state: string = "play";
  async triggerPlay() {
    if (this.state === "play") {
      this.state = "pause";
      await AudioPlayer.play();
      return;
    }

    this.state = "play";
    AudioPlayer.pause();
  }

  triggerVolume(event: any) {
    let volume = event.target.value / 100;

    AudioPlayer.changeVolume(volume);
  }

  get defaultAudioVolume() {
    return defaultAudioVolume;
  }
}
