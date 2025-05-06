import http from "http";
import * as fs from "node:fs";

http
  .createServer((req, res) => {
    if (req.url === "/about") {
      fs.readFile("./about.html", "utf8", (err, data) => {
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/") {
      fs.readFile("./index.html", "utf8", (err, data) => {
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("./contact-me.html", "utf8", (err, data) => {
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("./404.html", "utf8", (err, data) => {
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
