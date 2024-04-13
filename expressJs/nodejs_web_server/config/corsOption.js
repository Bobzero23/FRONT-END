const whitelist = [
  "http://yoursite.com",
  "http://localhost:127.0.0.1:5500",
  "http://localhost:3500/",
  //   "https://www.google.com.tr/",
];

/**handling cors */
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
