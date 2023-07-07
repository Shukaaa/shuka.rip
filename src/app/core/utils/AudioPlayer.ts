export class AudioPlayer {
  public static audio?: HTMLAudioElement;
  public static init() {
    this.audio = new Audio("assets/funkiiii.mp3");
    this.audio.loop = true;
  }

  public static async play() {
    if (this.audio) {
      await this.audio.play();
    }
  }

  public static pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public static changeVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = volume;
    }
  }
}
