const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  /* callback */
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File content:", data);
  }
});


/* It is an anonymous arrow function passed as the 3rd argument to fs.readFile.

🔍 Why is this the callback?

Because:

fs.readFile() is asynchronous

Node needs a function to call after reading the file

So you pass a function (err, data) => { ... }

That function is called later by Node → this is the callback */