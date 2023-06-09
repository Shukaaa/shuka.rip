export class SvgBackgroundUtils {
  private static getSvgBackground(width: number, height: number, opacity: number) {
    return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + width + "' height='" + height + "' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%239C92AC' fill-opacity='" + opacity + "' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
  }

  private static setSvgBackground(width: number, height: number, opacity: number) {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = this.getSvgBackground(width, height, opacity);
  }

  public static init() {
    setInterval(() => {
      let width = Math.floor(Math.random() * 100) + 10;
      let height = Math.floor(Math.random() * 100) + 10;
      let opacity = 0.05;

      this.setSvgBackground(width, height, opacity);
    }, 1000);
  }
}
