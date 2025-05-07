const express = require("express");
const app = express();

const options = { extensions: ["html"] };

app.use(express.static("static-file-directory", options));

app.listen(8080, () => {
  console.log("expess app cted");
});
