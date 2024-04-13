var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    //reading the url
    res.write(req.url);
    res.end("Hello Bobzero");
  })
  .listen(8080);

const fileName = process.argv[2] || "fileSystem";
fs.mkdirSync(fileName);

fs.writeFileSync(`${fileName}/index.html`, "");
fs.writeFileSync(`${fileName}/style.css`, "");
fs.writeFileSync(`${fileName}/app.js`, "");
