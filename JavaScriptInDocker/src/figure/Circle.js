import { Figure } from "./Figure.js";

export class Circle extends Figure {
  //private
  _radius;

  constructor(color, radius) {
    super(color);
    this._radius = radius;
  }

  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}
