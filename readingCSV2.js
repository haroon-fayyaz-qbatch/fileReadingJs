const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("products-file-1.csv");

const rd = readline.createInterface({ input: stream });

rd.on("line", function (line) {
  console.log(line);
});

rd.on("close", function () {});
