abstract class Box {
  x: number;
  x2: number;
  y: number;
  y2: number;

  constructor(x: number, x2: number, y: number, y2: number) {
    this.x = x;
    this.x2 = x2;
    this.y = y;
    this.y2 = y2;
  }

  abstract CalculateArea(): number
}

class Square extends Box {
  constructor(x: number) {
    super(x, x, x, x);
  }

  CalculateArea(): number {
    return this.x * this.x;
  }

}

export class Rectangle extends Box {
  constructor(x: number, y: number) {
    super(x, x, y, y);
  }
  CalculateArea(): number {
    return this.x * this.y;
  }

}

