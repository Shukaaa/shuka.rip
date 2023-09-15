export class EnlargeImageUtils {
  public static enlargeImage(src: string) {
    let image = document.getElementById("enlarged-image");
    let div = document.getElementById("enlarged-image-div");

    if (image instanceof HTMLImageElement && div instanceof HTMLDivElement) {
      image.src = src;
      div.style.display = "block";

      let blurElements = document.getElementsByClassName("blur");
      for (let i = 0; i < blurElements.length; i++) {
        let element = blurElements.item(i);
        if (element instanceof HTMLElement) {
          element.style.filter = "blur(5px)";
        }
      }
    }
  }

  public static closeEnlargedImage() {
    let div = document.getElementById("enlarged-image-div");
    if (div instanceof HTMLDivElement) {
      div.style.display = "none";

      let blurElements = document.getElementsByClassName("blur");
      for (let i = 0; i < blurElements.length; i++) {
        let element = blurElements.item(i);
        if (element instanceof HTMLElement) {
          element.style.filter = "blur(0px)";
        }
      }
    }
  }
}
