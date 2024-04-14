const exp = require("constants");
const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const corsOptions = require("./config/corsOption.js");
const path = require("path");
const { logger } = require("./middleware/logEvents");
const PORT = process.env.PORT || 3500;
const verifyJWT = require("./middleware/verifyJwt.js");
const cookieParser = require("cookie-parser");

/**BUILT-IN MIDDLEWARES */
app.use(logger);

// cross origin resource sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json(corsOptions));

//midlleware for cookies
app.use(cookieParser());

/**static files routing */
//built-in middleware for serving static files example css files
app.use(express.static(path.join(__dirname, "/public")));
//telling express to apply css for subdir folder
app.use("/subdir", express.static(path.join(__dirname, "/public")));

/**routes */
app.use("/", require("./routes/root.js"));
app.use("/register", require("./routes/register.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/refresh", require("./routes/refresh.js"));
app.use("/subdir", require("./routes/subdir"));
//everything comes after this line must verified and the ones above will not
app.use(verifyJWT);
app.use("/employees", require("./routes/api/employees"));

/**sending the error page whenever there is an error in the browser */
// app.get("/*", (req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
app.all("/*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.sendFile("./views/404.html", { root: __dirname });
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

/**CUSTOM ERROR HANDLING */
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
