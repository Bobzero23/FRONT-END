const fs = require("fs");
console.log(fs);

/**this file system method is asynchronous*/
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("INSIDE THE CALL BACK");
//   if (err) throw err;
// });
// console.log("AFTER THE CALL BACK");

/**this file system method is synchronous*/
// fs.mkdirSync("Cats");

/**here we are definitely saying that the 3rd argument in the command line is the name of the folder other wise use the default one*/
const fileName = process.argv[2] || "Project";
fs.mkdirSync(fileName);

/**creating multiple files in the give folder name */
fs.writeFileSync(`${fileName}/index.html`, "");
fs.writeFileSync(`${fileName}/style.css`, "");
fs.writeFileSync(`${fileName}/app.js`, "");
