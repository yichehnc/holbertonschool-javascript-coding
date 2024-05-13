#!/usr/bin/node
const request = require("request");
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }
  let count = 0;
  const results = JSON.parse(body).results;
  for (const film of results) {
    for (const charUrl of film.characters) {
      const charID = charUrl.split("/")[5];
      if (charID === "18") {
        count++;
      }
    }
  }
  console.log(count);
});
