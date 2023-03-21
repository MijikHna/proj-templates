import { Figure } from "./Figure";

export class Circle extends Figure {
  private _radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}

