const exp = require("constants");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { logger } = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;

/**BUILT-IN MIDDLEWARES */
app.use(logger);

const whitelist = [
  "http://yoursite.com",
  "http://localhost:127.0.0.1:5500",
  "http://localhost:3500/",
  //   "https://www.google.com.tr/",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  optionSuccessStatus: 200,
};

// cross origin resource sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json(corsOptions));

//built-in middleware for serving static files example css files
app.use(express.static(path.join(__dirname, "/public")));

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

/**sending the error page whenever there is an error in the browser */
app.get("/*", (req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

/**CUSTOM ERROR HANDLING */
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
