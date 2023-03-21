const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

while (1) {
  console.log('I am working');
  await sleep(5000);
}
