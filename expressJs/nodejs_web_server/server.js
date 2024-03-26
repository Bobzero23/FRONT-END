const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

/**a normal way of sending a file */
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

/**this is another way of doing the same thing above*/
app.get("^/$|new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

/**redirecting to a new page which is the endpoint above*/
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
