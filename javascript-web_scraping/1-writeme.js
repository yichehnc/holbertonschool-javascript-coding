#!/usr/bin/node
const fs = require("fs");
const filePath = process.argv[2];
const string = process.argv[3];

fs.writefile(filePath, String(string), (err) => {
  if (err) {
    console.log(err);
  }
});
