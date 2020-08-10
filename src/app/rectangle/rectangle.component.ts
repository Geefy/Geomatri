import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../Box';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  Area: string;

  constructor() { }

  ngOnInit(): void {
  }

  OnClickCalculate(length: number, height: number) {

    let rectangle = new Rectangle(length, height);

    this.Area = "The Area of your Rectangle is " + rectangle.CalculateArea();

  }

}
