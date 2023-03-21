import { Circle } from "./figure/Circle.js";
import { Rect } from "./figure/Rect.js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main () {
  while (1) {
    const circle = new Circle('red', 10);
    const rect = new Rect('blue', 10, 8);

    circle.printColor();
    console.log(circle.getArea());

    rect.printColor();
    console.log(rect.getArea());
    
    console.log('---')
    await sleep(5000);
  }
}

main();
