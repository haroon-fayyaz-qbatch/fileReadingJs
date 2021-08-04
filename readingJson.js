"use-strict";

const fs = require("fs");

// fs.readFile("student.json", (err, data) => {
//   if (err) throw err;
//   const jsonData = JSON.parse(data);
//   console.log(jsonData);
// });

let json = require("./student.json");
console.log(JSON.stringify(json, null, 2));
