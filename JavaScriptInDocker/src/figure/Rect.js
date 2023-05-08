import { Figure } from "./Figure.js";

export class Rect extends Figure {
  // private
  _width;
  _height;

  constructor(color, width, height) {
    super(color);
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._height * this._height;
  }
}
