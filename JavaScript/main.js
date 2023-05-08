import { compare }from './src/testMe.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

while (1) {
  console.log('I am working');
  console.log(compare(10, 20));
  await sleep(5000);
}
