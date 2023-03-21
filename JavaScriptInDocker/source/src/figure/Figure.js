export class Figure {
  // private
  _color;

  
  // public
  constructor(color) {
    this._color = color;
  }
  get color () {
    return this._color;
  }

  printColor() {
    return console.log(this._color);
  }

  getArea(){
    throw Error('Method "getArea" must be overridden')
  }
}
