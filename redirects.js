/* eslint-disable */
var fs = require("fs");
var rewrites = require("./content/setting/rewrites.json");

var filename = __dirname + "/_redirects";

let content = "";
rewrites["de"]["rewrites"].forEach(function (item) {
  content += `${item.from} ${item.to} 200\n`;
});

fs.writeFileSync(filename, content);
