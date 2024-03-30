const express = require("express");
const router = express.Router();
const path = require("path");

/**a normal way of sending a file */
router.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

/**this is another way of doing the same thing above*/
router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

/**redirecting to a new page which is the endpoint above*/
router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

module.exports = router;
