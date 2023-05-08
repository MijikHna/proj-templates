import { Figure } from "./Figure";

export class Rectangle extends Figure {
  private _width: number;
  private _height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}





