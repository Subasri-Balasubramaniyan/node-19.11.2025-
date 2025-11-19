📘 Async Programming in Node.js — Examples Project

This project demonstrates the three main ways to write asynchronous code in Node.js:

Callbacks

Promises

Async/Await

It also includes examples of:

Wrapping callbacks into Promises

Reading files asynchronously

Error handling

📂 Project Structure
/async
│
├── main.js          → async/await example
├── promise.js       → Promise wrapper for fs.readFile
├── callback.js      → Simple callback example
├── demo.txt         → Sample text file
└── README.md

🚀 1. Callback Example

callback.js

const fs = require("fs");

fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) return console.log("Error:", err);
  console.log("File Content:", data);
});

🚀 2. Promise Example

promise.js

const fs = require("fs");

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("demo.txt", "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = readFilePromise;

🚀 3. async/await Example

main.js

const readFilePromise = require("./promise");

async function readFileAsync() {
  try {
    const data = await readFilePromise();
    console.log("Content:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}

readFileAsync();

▶️ How to Run
1️⃣ Install Node.js (if not already installed)

Check version:

node -v

2️⃣ Navigate to the project folder
cd async

3️⃣ Run the callback version
node callback.js

4️⃣ Run the promise version
node promise.js   (if needed)

5️⃣ Run the async/await version
node main.js

📌 Requirements

Node.js v14+

A file named demo.txt in the same folder

Add some sample text to test

❗ Common Issues
❌ Content: is empty

Your file demo.txt is empty or contains only spaces.

❌ ENOENT: no such file or directory

You are running Node in the wrong folder or demo.txt is missing.

❌ Cannot mix require() and import

Use only CommonJS in this project.
