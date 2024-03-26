const fs = require("fs");
console.log(fs);

/**this file system method is asynchronous*/
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("INSIDE THE CALL BACK");
//   if (err) throw err;
// });
// console.log("AFTER THE CALL BACK");

/**this file system method is synchronous*/
fs.mkdirSync("Cats");
