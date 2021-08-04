const xml2js = require("xml2js");
const fs = require("fs");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("books.xml", "utf8");

parser.parseString(xml_string, function (error, result) {
  if (error === null) {
    result.catalog.book.forEach(function (book) {
      console.log(book.title);
    });
    // console.log(result.catalog.book);
    // result.forEach(function (item) {
    //   console.log(item);
    //   return;
    // });
    // console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(error);
  }
});
