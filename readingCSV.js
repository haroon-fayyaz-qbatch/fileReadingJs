const fs = require("fs");
const readline = require("readline");

var stream = fs.createReadStream("products-file-1.csv");
var reader = readline.createInterface({ input: stream });
var arr = [];
reader.on("line", (row) => {
  arr.push(row.split(","));
});

reader.on("close", () => {
  console.log(arr);
});
