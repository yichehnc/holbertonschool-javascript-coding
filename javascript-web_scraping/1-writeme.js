#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
const string = process.argv[3];
fs.writeFile(file, String(string), (err) => {
  if (err) {
    console.log(err);
  }
});
