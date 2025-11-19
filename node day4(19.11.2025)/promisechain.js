const fs=require("fs")
function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise("a.txt")
  .then((data1) => {
    console.log("A:", data1);
    return readFilePromise("b.txt");
  })
  .then((data2) => {
    console.log("B:", data2);
    return readFilePromise("c.txt");
  })
  .then((data3) => {
    console.log("C:", data3);
  })
  .catch((err) => console.log("Error:", err));
