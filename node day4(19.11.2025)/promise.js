const fs=require("fs")
function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise()
  .then((data) => console.log("Content:", data))
  .catch((err) => console.log("Error:", err));
