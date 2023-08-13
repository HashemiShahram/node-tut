const { readFile, writeFile, read } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, reuslt) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = reuslt;
  readFile("./content/second.txt", "utf-8", (err, reuslt) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = reuslt;
    writeFile(
      "./content/reuslt-async.txt",
      `Here is the result:${first},${second}`,
      (err, reuslt) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("don with");
      }
    );
  });
});

console.log("starting next task");
