export abstract class Figure {
  private _color: string;

  constructor(color: string) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  abstract getArea(): number;

  printColor(): void {
    console.log(this.color);
  }
}
