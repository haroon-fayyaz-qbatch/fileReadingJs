const fs = require("fs");

let data = "Writing data into the file\n";

fs.appendFile("file.txt", data, (err) => {
  if (err) throw err;
  else {
    console.log(data);
  }
});
