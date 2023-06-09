import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  intenseColors = [
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

  pages = [
    "Home",
    "About",
    "Projects",
    "Contact"
  ]

  sizer_state: 'expand' | 'compress' = 'expand';
  colorIndex = 0;

  ngAfterViewInit() {
    let square = document.getElementById('square');

    if (square) {
      document.addEventListener('mousemove', (e: MouseEvent): void => {
        // @ts-ignore
        square.style.left = e.pageX + 'px';
        // @ts-ignore
        square.style.top = e.pageY + 'px';
      });

      for (const page of this.pages) {
        let element = document.getElementById(page);

        if (element) {
          this.setHoverEffect(element, square);
        }
      }

      let sizer = document.getElementById('sizer');

      console.log(sizer);

      if (sizer) {
        this.setHoverEffect(sizer, square);
      }
    }
  }

  private getColorIndex() {
    this.colorIndex++;

    if (this.colorIndex >= this.intenseColors.length) {
      this.colorIndex = 0;
    }

    return this.colorIndex;
  }

  private setHoverEffect(element: HTMLElement, square: HTMLElement) {
      element.addEventListener('mouseenter', (e: MouseEvent): void => {
        if (square && element) {
          square.style.width = '80px';
          square.style.height = '25px';
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
          element.style.color = '#fff';
          square.style.backgroundColor = '#fff';
        }
      });
  }
}
