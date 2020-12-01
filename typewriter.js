const sentence = "";

function printAnimated(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), delay)
    delay += 50;
   }
   setTimeout(() => console.log("\n"), 2000);
}


printAnimated("hello there from lighthouse labs");
