import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements AfterViewInit {
  ngAfterViewInit() {
    let square = document.getElementById('square');

    if (square) {
      document.addEventListener('mousedown', (e: MouseEvent): void => {
        // todo make nice click effect
      });

      document.addEventListener('mouseup', (e: MouseEvent): void => {
        // todo make nice click effect
      });

      document.addEventListener('mousemove', (e: MouseEvent): void => {
        // @ts-ignore
        square.style.left = e.pageX + 'px';
        // @ts-ignore
        square.style.top = e.pageY + 'px';
      });
    }
  }
}
