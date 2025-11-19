const fs=require("fs")
fs.readFile('a.txt', 'utf8', (err, data1) => {
  if (err) return console.log(err);

  fs.readFile('b.txt', 'utf8', (err, data2) => {
    if (err) return console.log(err);

    fs.readFile('c.txt', 'utf8', (err, data3) => {
      if (err) return console.log(err);

      console.log(data1, data2, data3);
    });
  });
});
