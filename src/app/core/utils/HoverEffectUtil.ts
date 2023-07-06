export class HoverEffectUtil {
  private static intenseColors = [
    "#FF0000", // Red
    "#FF8C00", // Dark Orange
    "#FFD700", // Gold
    "#00FF00", // Lime Green
    "#00FFFF", // Cyan
    "#0000FF", // Blue
    "#8A2BE2", // Blue Violet
    "#FF00FF", // Magenta
    "#FF69B4", // Hot Pink
    "#FF4500"  // Orange Red
  ];

  private static colorIndex = 0;

  private static getColorIndex() {
    this.colorIndex++;

    if (this.colorIndex >= this.intenseColors.length) {
      this.colorIndex = 0;
    }

    return this.colorIndex;
  }

  public static setHoverEffect(element: HTMLElement, width: number = 80, height: number = 25) {
    let square = document.getElementById('square');

    element.addEventListener('mouseenter', (e: MouseEvent): void => {
      if (square && element) {
        square.style.width = width + 'px';
        square.style.height = height + 'px';
        square.style.display = 'block';
        // chose the color in a row
        element.style.color = this.intenseColors[this.getColorIndex()];

        // set the color of the square to the inverted color of the text
        let color = element.style.color;
        let rgb = color.substring(4, color.length - 1)
          .replace(/ /g, '')
          .split(',');
        let r = 255 - parseInt(rgb[0]);
        let g = 255 - parseInt(rgb[1]);
        let b = 255 - parseInt(rgb[2]);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    });

    element.addEventListener('mouseleave', (e: MouseEvent): void => {
      if (square && element) {
        square.style.width = '15px';
        square.style.height = '15px';
        square.style.display = 'none';
        element.style.color = '#333';
        square.style.backgroundColor = '#333';
      }
    });
  }
}
