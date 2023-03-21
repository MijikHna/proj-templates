import { Circle } from "./figure/Circle";
import { Rectangle } from "./figure/Rect";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main (): Promise<void>{
  while (true){
    const circle: Circle = new Circle('red', 10); 
    const rect: Rectangle = new Rectangle('blue', 10, 7);

    
    circle.printColor()
    console.log(circle.getArea());

    rect.printColor()
    console.log(rect.getArea());

    console.log('---');

    await sleep(5000);    
  }
}

main()
